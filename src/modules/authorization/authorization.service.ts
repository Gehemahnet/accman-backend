import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { UsersService } from "@modules/users/users.service";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import { JwtService } from "@nestjs/jwt";
import { ChangePasswordDto, LoginDto } from "@dto";
import { PrismaService } from "@modules/prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class AuthorizationService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findUserByLogin(login);
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch && user) {
      const { uuid, username, email } = user;

      return {
        uuid,
        username,
        email,
      };
    }

    return null;
  }

  async validateCurrentPassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.userService.findUserByUuid(userId);
    const isNotSame = await bcrypt.compare(dto.newPassword, user.password);

    if (isNotSame) {
      throw new BadRequestException(
        "Новый пароль должен отличаться от текущего",
      );
    }

    const isValid = await this.validateCurrentPassword(
      dto.currentPassword,
      user.password,
    );

    if (!isValid) {
      throw new ForbiddenException("Current password is invalid");
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);

    return this.prismaService.user.update({
      where: { uuid: userId },
      data: { password: hashedPassword, passwordChangedAt: new Date() },
    });
  }

  async sendResetPasswordLink(login: string) {
    const user = await this.userService.findUserByLogin(login);
    if (!user) {
      return;
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(resetToken, 10);
    const resetExpires = new Date(Date.now() + 360_00_00);

    await this.prismaService.user.update({
      where: { uuid: user.uuid },
      data: {
        passwordResetToken: hashedToken,
        passwordResetExpires: resetExpires,
      },
    });

    // const resetUrl = "";
    // mailService
    // await this.mailService.sendPasswordReset({
    // email: user.email,
    // resetUrl,
    // })
  }

  async resetPassword(userId: string, token: string, newPassword: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        uuid: userId,
        passwordResetExpires: { gt: new Date() }, // Проверка срока сразу в запросе
      },
    });

    const isValidToken = await bcrypt.compare(token, user.passwordResetToken);

    if (!user?.passwordResetToken || isValidToken) {
      throw new BadRequestException("The token is wrong or expired");
    }

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      throw new BadRequestException("Old and new password are same");
    }

    await this.prismaService.user.update({
      where: { uuid: userId },
      data: {
        password: await bcrypt.hash(newPassword, 10),
        passwordChangedAt: new Date(),
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    // Уведомление на почту
    // this.mailService
    //   .sendPasswordChangedConfirmation(user.email)
    //   .catch((err) => console.error(err));
  }

  async login(data: User) {
    return {
      access_token: this.jwtService.sign(data),
    };
  }
}

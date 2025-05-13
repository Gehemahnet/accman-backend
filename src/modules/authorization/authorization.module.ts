import { Module } from "@nestjs/common";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationController } from "./authorization.controller";
import { UsersModule } from "@modules/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "@strategies/local.strategy";
import { JwtStrategy } from "@strategies/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import * as process from "node:process";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  providers: [AuthorizationService, LocalStrategy, JwtStrategy],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}

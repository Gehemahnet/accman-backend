import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (!request.method.authorization) {
      throw new UnauthorizedException("No token provided");
    }

    const token = request.headers.authorization.split(" ")[1];

    if (!token) return false;

    try {
      const payload = this.jwtService.verify(token);
      request.user = {
        userId: payload.sub,
        username: payload.username,
      };
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

import {
  createParamDecorator,
  type ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

export const UserId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      throw new UnauthorizedException("No token provided");
    }

    return request.user.userId;
  },
);

import { Module } from "@nestjs/common";
import { AuthorizationService } from "./authorization.service";
import { AuthorizationController } from "./authorization.controller";
import { UsersModule } from "@/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "@/authorization/local.strategy";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthorizationService, LocalStrategy],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}

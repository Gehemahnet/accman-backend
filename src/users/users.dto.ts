import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
}

export class CreateUserDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  surname?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  dateOfBirth?: Date;

  @ApiPropertyOptional({ enum: Roles, default: Roles.USER })
  role?: Roles;
}

export class PaginationDto {
  @ApiPropertyOptional({ default: 10 })
  count: number;
  @ApiPropertyOptional({ default: 1 })
  page: number;
}

export class FindListParams {
  @ApiPropertyOptional()
  pagination: PaginationDto;
}

export class FindUsersByParamsDto extends FindListParams {
  @ApiProperty({ type: CreateUserDto, required: false })
  filterBy?: {};
}

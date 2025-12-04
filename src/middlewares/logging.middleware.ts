import { Injectable, type NestMiddleware } from "@nestjs/common";
import type { NextFunction, Request } from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
    next();
  }
}

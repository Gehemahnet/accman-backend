import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
    next();
  }
}

import type { INestApplication } from "@nestjs/common";
import session from "express-session";
import * as process from "node:process";

export const useSession = (app: INestApplication) =>
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        maxAge:
          (Number.isInteger(process.env.SESSION_COOKIE_LIFETIME_DAYS)
            ? Number(process.env.SESSION_COOKIE_LIFETIME_DAYS)
            : 1) *
          1000 *
          60 *
          60 *
          24,
      },
    }),
  );

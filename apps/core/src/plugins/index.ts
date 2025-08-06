import type { INestApplication } from "@nestjs/common";
import { useGlobalPipes } from "./global-pipes";
import { useSession } from "./session";

const combinePlugins = (app: INestApplication) => {
  const plugins: Array<(app: INestApplication) => INestApplication> = [
    useSession,
    useGlobalPipes,
  ];

  plugins.reduce((combined, plugin) => plugin(combined), app);
};

export default combinePlugins;

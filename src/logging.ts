import morgan from "morgan";
import { Express } from "express";
const logger = morgan("combined");

export const setupLogger = (app: Express) => {
  app.use(logger);
};

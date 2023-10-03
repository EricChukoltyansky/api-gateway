import rateLimit from "express-rate-limit";
import { Route } from "./routes";
import { Express } from "express";

export const setupRateLimit = (app: Express, routes: Route[]) => {
  routes.forEach((route) => {
    if (route.rateLimit) {
      app.use(route.url, rateLimit(route.rateLimit));
    }
  });
};

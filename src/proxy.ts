import { createProxyMiddleware } from "http-proxy-middleware";
import { Express } from "express";
import { Route } from "./routes";

export const setupProxy = (app: Express, routes: Route[]) => {
  routes.forEach((route) => {
    app.use(route.url, createProxyMiddleware(route.proxy));
  });
};

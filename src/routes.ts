export type Route = {
  url: string;
  auth: boolean;
  proxy: {
    target: string;
    changeOrigin: boolean;
    pathRewrite: {
      [key: string]: string;
    };
  };
  rateLimit?: {
    windowMs: number;
    max: number;
    message?: string;
  };
};

export const ROUTES: Route[] = [
  {
    url: "/api/products",
    auth: false,
    proxy: {
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/products": "/products",
      },
    },
  },
  {
    url: "/api/products/:productId",
    auth: false,
    proxy: {
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/products": "/products",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
      message: "Too many requests",
    },
  },
];

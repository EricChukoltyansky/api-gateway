import rateLimit from "express-rate-limit";

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
//   {
//     url: "/api/products",
//     auth: false,
//     proxy: {
//       target: process.env.TARGET_ERP || "http://localhost:8080",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api/products": "api/products",
//       },
//     },
//     rateLimit: {
//       windowMs: 15 * 60 * 1000, // 15 minutes
//       max: 3,
//       message: "Too many product requests",
//     },
//   },
//   {
//     url: "/api/products/:productId",
//     auth: false,
//     proxy: {
//       target: process.env.TARGET_ERP || "http://localhost:8080",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api/products": "api/products",
//       },
//     },
//     rateLimit: {
//       windowMs: 15 * 60 * 1000, // 15 minutes
//       max: 100,
//       message: "Too many product requests",
//     },
//   },
  {
    url: "/api/orders/:userId",
    auth: false,
    proxy: {
      target: process.env.TARGET_OMS || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/orders": "api/orders",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10,
      message: "Too many order or inventory update requests",
    },
  },
  {
    url: "/api/shop_inventory",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory": "api/shop_inventory",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
      message: "Too many product requests",
    },
  },
  {
    url: "/api/shop_inventory/:productId",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory": "api/shop_inventory",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
      message: "Too many product requests",
    },
  },
  {
    url: "/api/shop_inventory/updateInventory",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory/updateInventory":
          "api/shop_inventory/updateInventory",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10,
      message: "Too many order or inventory update requests",
    },
  },
  {
    url: "/api/banner",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner": "api/banner",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 50,
      message: "Too many banner requests",
    },
  },
  {
    url: "/api/banner/:bannerId",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner": "api/banner",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 50,
      message: "Too many banner requests",
    },
  },
  {
    url: "/api/banner/product/:productId",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner/product": "api/banner/product",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 50,
      message: "Too many banner requests",
    },
  },
];

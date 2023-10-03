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
  {
    url: "/api/products",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
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
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/products": "/products",
      },
    },
  },
  {
    url: "/api/orders/:userId",
    auth: false,
    proxy: {
      target: process.env.TARGET_OMS || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/orders": "/orders",
      },
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
      message: "Too many requests",
    },
  },
  {
    url: "/api/shop_inventory",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory": "/shop_inventory",
      },
    },
  },
  {
    url: "/api/shop_inventory/:productId",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory": "/shop_inventory",
      },
    },
  },
  {
    url: "/api/shop_inventory/updateInventory",
    auth: false,
    proxy: {
      target: process.env.TARGET_ERP || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/shop_inventory/updateInventory": "/shop_inventory/updateInventory",
      },
    },
  }, 
  {
    url: "/api/banner",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner": "/banner",
      },
    },
  },
  {
    url: "/api/banner/:bannerId",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner": "/banner",
      },
    },
  }, 
  {
    url: "/api/banner/product/:productId",
    auth: false,
    proxy: {
      target: process.env.TARGET_BANNER || "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/banner/product": "/banner/product",
      },
    },
  },
  
];

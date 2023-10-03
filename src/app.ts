import express from "express";
import { setupLogger } from "./logging";
import { setupProxy } from "./proxy";
import { setupRateLimit } from "./rateLimit";
import { ROUTES } from "./routes";
const app = express();

app.use(express.json());

setupLogger(app);

setupProxy(app, ROUTES);

setupRateLimit(app, ROUTES);




app.listen(5000, () => console.log("Server running"));

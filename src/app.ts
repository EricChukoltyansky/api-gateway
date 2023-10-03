import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { setupLogger } from "./logging";
import { setupProxy } from "./proxy";
import { setupRateLimit } from "./rateLimit";
import { ROUTES } from "./routes";
const app = express();

app.use(express.json());

setupLogger(app);

setupProxy(app, ROUTES);

setupRateLimit(app, ROUTES);

app.get("/", (req, res) => {
    res.send("Hello World");
    });




app.listen(5000, () => console.log("Server running"));

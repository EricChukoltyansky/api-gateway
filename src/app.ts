import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import { setupLogger } from "./logging";
import { setupProxy } from "./proxy";
import { setupRateLimit } from "./rateLimit";
import { ROUTES } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

setupLogger(app);

setupProxy(app, ROUTES);

setupRateLimit(app, ROUTES);

app.get("/", (req, res) => {
    res.send("Hello World");
    });




app.listen(5000, () => console.log("Server running"));

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import { userRoutes,authRoutes } from "./routes";

const app = express();
createConnection();
//middleswares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api",userRoutes);
app.use("/api",authRoutes);

app.listen(3000);
console.log("port", 3000);

import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

config();
console.log('MONGODB_URL in index.ts:', process.env.MONGODB_URL);
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//only using it for development
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
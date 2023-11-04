import express from "express";
import "express-async-errors";
import cors from "cors";
import handleError from "./errors/handleError";
import { userRoutes } from "./routes/users.routes";

export const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);

app.use(handleError);

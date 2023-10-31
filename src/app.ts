import express from "express";
import "express-async-errors";
import cors from "cors";
import handleError from "./errors/handleError";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(handleError);

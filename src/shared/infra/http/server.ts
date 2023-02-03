import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "shared/errors/AppError";

import "../../container";
import { AppDataSource } from "../typeorm/database/data-source";
import { router } from "./routes";

const PORT = process.env.port || 3333;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 The server was started at: http://${HOSTNAME}:${PORT}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("🎉 Database connected!");
  })
  .catch((err) => {
    console.log(`Error - ${err}`);
  });

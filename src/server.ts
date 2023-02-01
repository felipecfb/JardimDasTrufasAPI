import express, { Request, Response } from "express";
import { AppDataSource } from "./database/data-source";

const PORT = process.env.port || 3333;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

AppDataSource.initialize().then(() => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello world!")
  });
  
  app.listen(PORT, () => {
    console.log(`🚀 The server was started at: http://${HOSTNAME}:${PORT}`);
  });
}).catch(err => {
  console.log(`Error - ${err}`);
}).finally(() => {
  console.log("🎉 Database connected!");
})

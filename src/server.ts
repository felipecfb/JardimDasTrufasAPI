import express, { Request, Response } from "express";
import { AppDataSource } from "./database/data-source";
import { router } from "./routes";

const PORT = process.env.port || 3333;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(express.json());

AppDataSource.initialize().then(() => {
  app.use(router);
  
  app.listen(PORT, () => {
    console.log(`🚀 The server was started at: http://${HOSTNAME}:${PORT}`);
  });
}).catch(err => {
  console.log(`Error - ${err}`);
}).finally(() => {
  console.log("🎉 Database connected!");
})

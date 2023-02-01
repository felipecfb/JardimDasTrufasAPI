import express, { Request, Response } from "express";

const PORT = 3333;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello world!")
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso http://localhost:${PORT}`);
});
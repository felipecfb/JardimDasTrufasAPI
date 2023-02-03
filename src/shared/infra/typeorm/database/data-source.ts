import "reflect-metadata";
import "dotenv/config";

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PWD || "",
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/entities/**/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

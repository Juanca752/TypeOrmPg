import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entities/User";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [User],
  logging: true,
  synchronize: true,
});

import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database Conected");
    app.listen(3000);
    console.log("Servere port is listening ", 3000);
  } catch (error) {
    console.error(error);
  }
}

main();

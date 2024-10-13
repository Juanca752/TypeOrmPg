import express from "express";
import morgan from "morgan";
import cors from "cors";
import useRoutes from "./routes/users.routes";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(useRoutes);

export default app;

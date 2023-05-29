import express from "express";
import { taskRoutes } from "./routes";

const app = express();

app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

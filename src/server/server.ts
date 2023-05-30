import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

import { seedRoutes, taskRoutes } from "../routes";
import { sequelize } from "../database";
import { specs } from "../config/swagger";
import swaggerUi from "swagger-ui-express";

const app = express();

// Coors
app.use(cors());

// Morgan
app.use(morgan("dev"));

// Conexión a la base de datos
try {
  sequelize.authenticate();
  sequelize.sync();
  console.log("Conexión correcta a BD");
} catch (error) {
  console.log(error);
}

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api", seedRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // Genera la documentación

// Middleware para manejar errores de ruta
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error en la ruta:", err);
  res.status(500).json({ error: "Error en la ruta" });
});

export default app;

import { Request, Response } from "express";
import { seedTasks } from "../seeds";

const executeSeed = async (req: Request, res: Response) => {
  try {
    await seedTasks(req, res); // Espera a que la función se complete antes de enviar la respuesta
  } catch (error) {
    console.error("Error al ejecutar la semilla:", error);
    res.status(500).json({ error: "Error al ejecutar la semilla" });
  }
};

export { executeSeed };

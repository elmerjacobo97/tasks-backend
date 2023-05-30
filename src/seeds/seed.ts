import { Request, Response } from "express";
import { Task } from "../models";
import { seedData } from "../utils";

// Variable para controlar el estado de ejecución de la semilla
let seedExecuted = false;

export const seedTasks = async (req: Request, res: Response) => {
  try {
    if (seedExecuted) {
      return res.send("La semilla ya fue ejecutada");
    }
    // Marcar la semilla como ejecutada
    seedExecuted = true;

    // Eliminar los registros existentes de la tabla 'tasks'
    await Task.destroy({
      where: {},
      truncate: true, // Esto eliminará todos los registros en la tabla
    });

    // Código de la semilla para crear las nuevas tareas
    await Task.bulkCreate(seedData);

    // Retorna un mensaje de éxito.
    res.send("La semilla se ha creado correctamente");
  } catch (error) {
    console.error("Error al crear la semilla:", error);
    res.send("Error al crear la semilla");
  }
};

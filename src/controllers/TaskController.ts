import { Request, Response } from "express";
import { Task } from "../models";
import { Op } from "sequelize";

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    // Crea la tarea en la base de datos
    await Task.create({ title, description });

    // Obtiene todas las tareas después de crear la nueva tarea
    const tasks = await Task.findAll();

    res.json(tasks);
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    // Obtén los parámetros de consulta
    const page = parseInt(req.query.page as string) || 1; // Página actual (predeterminada: 1)
    const pageSize = parseInt(req.query.pageSize as string) || 10; // Tamaño de página (predeterminado: 10)

    // Calcula el desplazamiento y el límite de la consulta
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    // Obtiene todas las tareas de la base de datos con paginación
    const tasks = await Task.findAll({ offset, limit });

    res.json(tasks);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

const getTaskCount = async (req: Request, res: Response) => {
  try {
    // Obtiene el recuento total de tareas en la base de datos
    const taskCount = await Task.count();

    res.json({ count: taskCount });
  } catch (error) {
    console.error("Error al obtener el recuento de tareas:", error);
    res.status(500).json({ error: "Error al obtener el recuento de tareas" });
  }
};

const getTaskByIdOrTitle = async (req: Request, res: Response) => {
  try {
    const { idOrTitle } = req.params; // Obtén el parámetro de la solicitud (ID o título)

    let task;

    if (Number(idOrTitle)) {
      // Si el parámetro es un número, busca la tarea por ID en la base de datos
      task = await Task.findByPk(idOrTitle);
    } else {
      // Si el parámetro no es un número, busca la tarea por título o muestra sugerencias
      task = await Task.findOne({
        where: {
          title: {
            [Op.like]: `%${idOrTitle}%`, // Búsqueda de coincidencia parcial
          },
        },
      });
    }

    if (task) {
      res.json(task);
    } else {
      // Si no se encontró una coincidencia exacta, mostrar sugerencias
      const suggestions = await Task.findAll({
        where: {
          title: {
            [Op.like]: `%${idOrTitle}%`, // Búsqueda de coincidencia parcial
          },
        },
        limit: 5, // Limitar el número de sugerencias a mostrar
      });

      res.status(404).json({
        error: "Tarea no encontrada",
        suggestions,
      });
    }
  } catch (error) {
    console.error("Error al obtener la tarea:", error);
    res.status(500).json({ error: "Error al obtener la tarea" });
  }
};

const updateTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtén el ID de la tarea a actualizar
    const { title, description, completed } = req.body; // Obtén los datos de la tarea a actualizar

    // Verificar si la tarea existe en la base de datos
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Actualizar los campos de la tarea
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    // Guardar los cambios en la base de datos
    await task.save();

    res.json(task);
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
};

const deleteTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtén el ID de la tarea a eliminar

    // Verificar si la tarea existe en la base de datos
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    // Eliminar la tarea de la base de datos
    await task.destroy();

    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};

export {
  createTask,
  getTasks,
  getTaskCount,
  getTaskByIdOrTitle,
  updateTaskById,
  deleteTaskById,
};

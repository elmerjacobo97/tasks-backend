import { Router } from "express";
import {
  getTaskCount,
  createTask,
  deleteTaskById,
  getTaskById,
  getTasks,
  updateTaskById,
} from "../controllers";

const taskRoutes = Router();

taskRoutes.get("", getTasks);

taskRoutes.get("/count", getTaskCount);

taskRoutes.get("/:id", getTaskById);

taskRoutes.post("/", createTask);

taskRoutes.put("/:id", updateTaskById);

taskRoutes.delete("/:id", deleteTaskById);

export { taskRoutes };

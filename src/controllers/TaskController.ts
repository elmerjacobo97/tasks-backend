import { Request, Response } from "express";

const createTask = (req: Request, res: Response) => {
  res.send("Create Task");
};

const getTasks = (req: Request, res: Response) => {
  res.send("Get Tasks");
};

const getTaskCount = (req: Request, res: Response) => {
  res.send("Get Task Count");
};

const getTaskById = (req: Request, res: Response) => {
  res.send("Get Task By Id");
};

const updateTaskById = (req: Request, res: Response) => {
  res.send("Update Task By Id");
};

const deleteTaskById = (req: Request, res: Response) => {
  res.send("Delete Task");
};

export {
  createTask,
  getTasks,
  getTaskCount,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Auth } from "../entity/Auth";
import { Task } from "../entity/Task";
export const getTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tasks = await getRepository(Task).find();
  const formatedTasks = tasks.map((tasks) => {
    return {"id":tasks.id,"name": tasks.task_name,"description":tasks.task_description,"status":tasks.status}
  })
  return res.json(formatedTasks);
};

export const getTasksByUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Auth ={id:3}
  const tasks = await getRepository(Task).find({
    where: {
      Auth: {id:Auth.id}
    },
    relations: ["auth"] 
  });

  return res.json(tasks);
};

export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const task = await getRepository(Task).findOne(req.params.id);

  if (!task) {
    return res.status(404).json({ error: "task not found" });
  }

  return res.json(task);
};

export const createTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTask = getRepository(Task).create(req.body);
  const result = await getRepository(Task).save(newTask);

  return res.json(result);
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const task = await getRepository(Task).findOne(req.params.id);

  if (task) {
    getRepository(Task).merge(task, req.body);
    const results = await getRepository(Task).save(task);
    return res.json(results);
  }

  return res.status(404).json({ error: "task not found" });
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const task = await getRepository(Task).delete(req.params.id);

  if (!task) {
    return res.status(404).json({ error: "task not found" });
  }

  return res.json(task);
};
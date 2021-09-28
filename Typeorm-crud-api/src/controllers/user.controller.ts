import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  return res.json(user);
};

export const createUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUsers = getRepository(User).create(req.body);
  const result = await getRepository(User).save(newUsers);

  return res.json(result);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);

  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }

  return res.status(404).json({ error: "user not found" });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).delete(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  return res.json(user);
};
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Auth } from "../entity/Auth";
import bcrypt from "bcryptjs";
import jToken from "../helpers/jwt";
import UserTypes from "../entity/UserRol";

export const authUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  
  const { body } = req;
  const { mail, pass } = body;
  const user = await getRepository(Auth).findOne({ mail });

  const passwordCorrect = user ? user.pass : "";
  const compare = bcrypt.compare(pass, passwordCorrect);
  if (!compare) {
    return res.status(401).json({
      ok: false,
      message: `User or password do not match`,
    });
  }

  const userPayload = {
    id: user ? user.id : 0,
    name: user ? user.name : "",
    mail: user ? user.mail : "",
    rol: user ? user.id_tipouser.name : "",
  };

  const t_jwt = jToken.createToken(userPayload);
  if (!t_jwt) {
    throw new Error("Server Error");
  }

  return res.json({
    ok: true,
    message: `User signing successfully`,
    token: t_jwt,
    user: user,
  });
};

export const registerUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { body } = req;

    const salt = 10;

    body.pass = await bcrypt.hash(body.pass, salt);

    const newUsers = getRepository(Auth).create(body);
    const result = await getRepository(Auth).save(newUsers);

    const userPayload = {
      id: body ? body.id : 0,
      name: body ? body.name : "",
      mail: body ? body.mail : "",
      rol: body ? body.id_tipouser : "",
    };

    const t_jwt = jToken.createToken(userPayload);
    if (!t_jwt) {
      throw new Error("Server Error");
    }
    return res.json({
      ok: true,
      message: `User signing successfully`,
      token: t_jwt,
      user: result,
    });
  } catch {
    throw new Error("register Error");
  }
};

export const getUserType = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userTypes = await getRepository(UserTypes).find();
  return res.json(userTypes);
};

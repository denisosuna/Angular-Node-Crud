import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Auth } from "../entity/Auth";
import bcrypt from "bcryptjs";
import jToken from "../helpers/jwt";

export const authUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const { mail, pass } = body;
  const user = await getRepository(Auth).findOne({ mail });
  console.log(body)
  const passwordCorrect = user ? user.pass : "";
  const compare = bcrypt.compareSync(pass, passwordCorrect);
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
  const { body } = req;
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  body.pass = await bcrypt.hash(body.pass, salt);

  const newUsers = getRepository(Auth).create(body);
  const result = await getRepository(Auth).save(newUsers);

  return res.json(result);
};

import jwt from "jsonwebtoken";

const jToken = {
  createToken: (payload: object): string | boolean => {
    if (!payload) {
      return false;
    }

    return jwt.sign(payload, process.env.JWT_SECRET || "aux___secret", {
      expiresIn: 60 * 60,
    });
  },
  verifyToken: (jwt_received: string): any => {
    const decode = jwt.verify(jwt_received, process.env.JWT_SECRET || "aux___secret");
    return decode;
  },
};

type JWToken = {
  id: number;
  rol: string;
  iat: number;
  exp: number;
};

export default jToken;
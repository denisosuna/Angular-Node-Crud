import { Router } from "express";

const router = Router();

import {getUsers,createUsers,getUser,updateUser,deleteUser} from "../controllers"

router.get("/users",getUsers);
router.post("/user",createUsers);
router.get("/user/:id",getUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);

export default router;

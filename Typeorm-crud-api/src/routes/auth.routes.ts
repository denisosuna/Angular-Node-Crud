import { Router } from "express";

const router = Router();

import {authUsers,registerUsers} from "../controllers"

router.post("/login",authUsers);
router.post("/register",registerUsers);

export default router;

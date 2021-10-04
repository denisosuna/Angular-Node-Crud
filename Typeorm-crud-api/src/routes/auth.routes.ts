import { Router } from "express";

const router = Router();

import {authUsers,registerUsers,getUserType} from "../controllers"

router.get("/userTypes",getUserType);
router.post("/login",authUsers);
router.post("/register",registerUsers);

export default router;

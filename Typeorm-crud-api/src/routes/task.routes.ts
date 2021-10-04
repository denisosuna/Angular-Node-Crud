import { Router } from "express";

const router = Router();

import {getTasks,getTasksByUser,createTasks,getTask,updateTask,deleteTask} from "../controllers"

router.get("/tasks",getTasks);
router.post("/task",createTasks);
router.get("/task/:id",getTask);
router.get("/taskByUser/:id",getTasksByUser);
router.put("/task/:id",updateTask);
router.delete("/task/:id",deleteTask);

export default router;

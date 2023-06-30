import { Router } from "express";
import usersRouter from "@/routers/users.router";

const router = Router();

router.use(usersRouter);

export default router;
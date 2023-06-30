import usersController from "@/controllers/users.controllers";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get('/users', usersController.getUsers);
usersRouter.get('/users/:id', usersController.getUserById);
usersRouter.post('/users', usersController.createUser);
usersRouter.delete('/users/:id', usersController.deleteUser);

export default usersRouter;
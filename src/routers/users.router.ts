import usersController from "@/controllers/users.controllers";
import validateSchema from "@/middlewares/validateSchema.middleware";
import { userSchema } from "@/shcemas/users.schema";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get('/users', usersController.getUsers);
usersRouter.get('/users/:id', usersController.getUserById);
usersRouter.post('/users', validateSchema(userSchema), usersController.createUser);
usersRouter.delete('/users/:id', usersController.deleteUser);


export default usersRouter;
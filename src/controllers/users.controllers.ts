import { User, UserInput } from "@/protocols";
import usersService from "@/services/users.services";
import { Request, Response } from "express";

async function getUsers(req: Request, res: Response) {
    const users: User[] = await usersService.getUsers();
    res.status(200).send(users);
}

async function getUserById(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const user: User = await usersService.getUserById(id);
    res.status(200).send(user);
}

async function createUser(req: Request, res: Response) {
    const user: UserInput = req.body
    await usersService.createUser(user);
    res.sendStatus(201);
}

async function deleteUser(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    await usersService.deleteUser(id);
    res.sendStatus(200);
}


const usersController = {
    getUsers,
    getUserById,
    createUser,
    deleteUser
}

export default usersController;
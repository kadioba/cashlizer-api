import { User, UserInput } from "@/protocols";
import usersRepository from "@/repositories/users.repository";


async function getUsers(limit: number) {
    const users: User[] = await usersRepository.getUsers(limit);
    return users;
}

async function getUserById(id: number) {
    const user: User = await usersRepository.getUserById(id);
    return user;
}

async function createUser(user: UserInput) {
    await usersRepository.createUser(user);
}

async function deleteUser(id: number) {
    await usersRepository.deleteUser(id);
}

async function updateUser(id: number, user: UserInput) {
    await usersRepository.updateUser(id, user);
}

const usersService = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}

export default usersService;
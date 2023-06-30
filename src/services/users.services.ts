import { User, UserInput } from "@/protocols";
import usersRepository from "@/repositories/users.repository";


async function getUsers() {
    const users: User[] = await usersRepository.getUsers();
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

const usersService = {
    getUsers,
    getUserById,
    createUser,
    deleteUser
}

export default usersService;
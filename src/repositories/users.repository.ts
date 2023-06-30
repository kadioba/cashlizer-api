import db from "@/database/databse.connection";
import { User, UserInput } from "@/protocols";

async function getUsers() {
    const users = await db.query<User>('SELECT * FROM users');
    return users.rows;
}

async function getUserById(id: number) {
    const user = await db.query<User>('SELECT * FROM users WHERE id = $1', [id]);
    return user.rows[0];
}

async function createUser(user: UserInput) {
    await db.query<UserInput>('INSERT INTO users (name, cpf, email, cellphone) VALUES ($1, $2, $3, $4)',
        [user.name, user.cpf, user.email, user.cellphone]);
}

async function deleteUser(id: number) {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
}

const usersRepository = {
    getUsers,
    getUserById,
    createUser,
    deleteUser
}

export default usersRepository;

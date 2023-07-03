import db from "@/database/databse.connection";
import { User, UserInput } from "@/protocols";

async function getUsers(limit: number) {
    let queryParams: number[] = [];
    let query: string = `SELECT * FROM users`;

    if (limit) {
        queryParams.push(limit);
        query += ` LIMIT $${queryParams.length}`;
    }

    const users = await db.query<User>(query, queryParams);
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

async function updateUser(id: number, user: UserInput) {
    await db.query<UserInput>('UPDATE users SET name = $1, cpf = $2, email = $3, cellphone = $4 WHERE id = $5',
        [user.name, user.cpf, user.email, user.cellphone, id]);
}

const usersRepository = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}

export default usersRepository;

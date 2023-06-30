export type User = {
    id: number;
    name: string;
    cpf: string;
    email: string;
    cellphone: string;
    createdAt: Date;
}

export type UserInput = {
    name: string;
    cpf: string;
    email: string;
    cellphone: string;
}
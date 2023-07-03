import { UserInput } from "@/protocols";
import Joi from "joi";

export const userSchema = Joi.object<UserInput>({
    name: Joi.string().required(),
    cpf: Joi.string().required(),
    email: Joi.string().email().required(),
    cellphone: Joi.string().required()
});

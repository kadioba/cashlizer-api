import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";

export default function validateSchema(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);

        if (validation.error) {
            const errorList = validation.error.details.map((detail) => detail.message);
            res.status(httpStatus.BAD_REQUEST).send(errorList);
        }

        next();
    }
}
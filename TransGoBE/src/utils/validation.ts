import joi from "joi"

export const RegisterSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
})

export const LoginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

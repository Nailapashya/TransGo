import { User } from "@prisma/client"
import db from "../lib/db"
import * as validation from "../utils/validation"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (body: User) => {
    const { value } = validation.RegisterSchema.validate(body);

    const existingEmail = await db.user.findUnique({
        where: {
            email: value.email,
        },
    });

    if (existingEmail) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);

    return db.user.create({
        data: {
            username: value.username,
            email: value.email,
            password: hashedPassword,
            gender: value.gender,
            phoneNumber: value.phoneNumber,
        },
    });
};


export const login = async (body: User) => {
    const { error, value } = validation.LoginSchema.validate(body);
    
    if (error) {
        throw new Error("Invalid login credentials");
    }
    
    const existingUser = await db.user.findUnique({
        where: {
            email: value.email,
        },
    });

    if (!existingUser) {
        throw new Error("Email has not been registered");
    }

    const isMatch = await bcrypt.compare(value.password, existingUser.password);

    if (!isMatch) {
        throw new Error("Password doesn't match");
    }

    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY!, { expiresIn: "1d" });

    return { user: existingUser, token };
};

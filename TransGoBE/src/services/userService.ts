import { User } from "@prisma/client"
import db from "../lib/db"

export const findAll = async () => {
    return db.user.findMany()
}

export const findByName = async (name: string) => {
    return db.user.findMany({
        where: { username: name }
    })
}

export const findById = async (id: number) => {
    return db.user.findUnique({
        where: { id }
    })
}

export const updateUser = async (body: User, id: number) => {
    const userWhoExists = await db.user.findUnique({
        where: { id }
    })

    if (!userWhoExists) {
        throw new Error("USER NOT FOUND!")
    }

    return db.user.update({
        where: { id },
        data: {
            username: body.username,
            email: body.email,
            password: body.password,
            gender: body.gender,
            phoneNumber: body.phoneNumber
        }
    })
}

export const deletUser = async (id: number) => {
    return db.user.delete({
        where: { id }
    })
}
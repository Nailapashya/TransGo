import db from "../lib/db"
import { Ticket } from "@prisma/client"

export const addTicket = async (userId: number, body: Ticket) => {
    const userSelect = await db.user.findUnique({
        where: { id: userId }
    })

    if (!userSelect) {
        throw new Error("User not found")
    }

    return db.ticket.create({
        data: {
            ...body,
            userId: userId,
            busId: body.busId,
        },
        include: {
            user: true,
            bus: true,
        }
    })
}

export const updateTicket = async (id: number, body: Ticket) => {
    return db.ticket.update({
        where: { id },
        data: {
            ...body
        }
    })
}

export const cancelTicket = async(id: number) => {
    return db.ticket.delete({
        where: { id },  
    })
}

import * as ticketService from "../services/ticketService"
import { Request, Response } from "express"

export const addTicket = async(req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const body = req.body
        return res.status(200).json(await ticketService.addTicket(+userId, body))

        
    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat add ticket")
    }
}
export const updateTicket = async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body
        return res.status(200).json(await ticketService.updateTicket(+id, body))

    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat add ticket")
    }
}
export const cancelTicket = async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        return res.status(200).json(await ticketService.cancelTicket(+id))

    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat add ticket")
    }
}
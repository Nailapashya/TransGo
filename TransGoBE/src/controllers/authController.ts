import * as authService from "../services/authService"
import {Request, Response } from "express"

export const register = async (req: Request, res: Response) => {
    try {
        const body = req.body
        return res.status(200).send(await authService.register(body))

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const dataUser = await authService.login(body)
        return res.status(200).send(dataUser)

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


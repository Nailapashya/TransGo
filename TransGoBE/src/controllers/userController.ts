import * as userService from "../services/userService"
import {Request, Response } from "express"

export const findAll = async(req: Request, res: Response) => {
    try{
        const dataUser = await userService.findAll()
        return res.status(200).json(dataUser)

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
export const findByName = async(req: Request, res: Response) => {
    try{
        const name = req.params.name
        return res.status(200).json(await userService.findByName(name))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
export const findById = async(req: Request, res: Response) => {
    try{
        const id =  parseInt(req.params.id)
        return res.status(200).json(await userService.findById(id))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
export const updateUser = async(req: Request, res: Response) => {
    try{
        const body = req.body
        const id = parseInt(req.params.id)
        return res.status(200).json(await userService.updateUser(body, id))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
export const deleteUser = async(req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id)
        return res.status(200).json(await userService.deletUser(id))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
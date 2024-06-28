import * as busService from "../services/busService";
import { Request, Response } from "express";


export const addBus = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const newBus = await busService.addBus(body);
        return res.status(200).json(newBus);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error saat menambahkan bus");
    }
};


export const getAllBuses = async (req: Request, res: Response) => {
    try {
        const buses = await busService.getAllBuses();
        return res.status(200).json(buses);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error saat mendapatkan daftar bus");
    }
};

export const getBusById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const bus = await busService.getBusById(+id);
        if (!bus) {
            return res.status(404).json("Bus tidak ditemukan");
        }
        return res.status(200).json(bus);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error saat mendapatkan detail bus");
    }
};

export const updateBus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedBus = await busService.updateBus(+id, body);
        return res.status(200).json(updatedBus);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error saat memperbarui bus");
    }
};

export const deleteBus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await busService.deleteBus(+id);
        return res.status(200).json("Bus berhasil dihapus");
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error saat menghapus bus");
    }
};

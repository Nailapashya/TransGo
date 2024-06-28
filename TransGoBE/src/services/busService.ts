import db from "../lib/db";
import { Bus } from "@prisma/client";

export const addBus = async (body: Bus) => {
    return db.bus.create({
        data: {
            licensePlate: body.licensePlate,
            capacity: body.capacity,
        },
    });
};


export const getAllBuses = async () => {
    return db.bus.findMany();
};


export const getBusById = async (id: number) => {
    return db.bus.findUnique({
        where: { id },
    });
};

export const updateBus = async (id: number, body: Bus) => {
    return db.bus.update({
        where: { id },
        data: {
            licensePlate: body.licensePlate,
            capacity: body.capacity,
        },
    });
};


export const deleteBus = async (id: number) => {
    return db.bus.delete({
        where: { id },
    });
};

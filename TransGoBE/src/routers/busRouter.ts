import { Router } from "express";
import * as busController from "../controllers/busController";

const busRouter = Router();

busRouter.post("/addBus", busController.addBus);
busRouter.get("/getAllBuses", busController.getAllBuses);
busRouter.get("/getBusById/:id", busController.getBusById);
busRouter.put("/updateBus/:id", busController.updateBus);
busRouter.delete("/deleteBus/:id", busController.deleteBus);

export default busRouter;

import {Router} from "express"
import * as ticketController from "../controllers/ticketController"

const ticketRouter = Router()

ticketRouter.post("/addTicket/:userId", ticketController.addTicket)
ticketRouter.put("/updateTicket/:id", ticketController.updateTicket)
ticketRouter.delete("/cancel/:id", ticketController.cancelTicket)

export default ticketRouter

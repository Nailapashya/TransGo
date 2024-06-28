import {Router} from "express"
import * as userController from "../controllers/userController"

const userRouter = Router()

userRouter.get("/findAll", userController.findAll)
userRouter.get("/findById/:id", userController.findById)
userRouter.get("/findByName/:name", userController.findByName)
userRouter.put("/updateUser/:id", userController.updateUser)
userRouter.delete("/delete/:id", userController.deleteUser)

export default userRouter

import express from "express"
import cors from "cors"
import db from "../src/lib/db"
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import ticketRouter from "./routers/ticketRouter";
import busRouter from "./routers/busRouter";

const PORT = process.env.PORT || 5002
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(authRouter)
app.use(userRouter)
app.use(ticketRouter)
app.use(busRouter)

app.listen(PORT, async()=>{
    await db.$connect()
    console.log(`Server running in port: ${PORT}`)
})
import express, { Request, Response } from "express";
import { userRouter } from "./routes/routes";
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())


app.listen(Number(process.env.PORT || 3003), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
app.use('/users', userRouter)


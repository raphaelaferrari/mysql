import { Router } from "express";
import express from "express";
import { UserController } from "../controller/UserController";
import { UserBusiness } from "../business/UserBusiness";
import { UserDB } from "../database/UserDB";

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDB()
    )
)

userRouter.get('/', userController.getUsers)

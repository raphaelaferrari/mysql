import { Request, Response, Router } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) {}

    public getUsers = async (req: Request, res: Response) => {
        try{
            const output = await this.userBusiness.get()

            res.status(200).send(output)
        } catch (err) {
            console.log(err);
            
        }
    }
}

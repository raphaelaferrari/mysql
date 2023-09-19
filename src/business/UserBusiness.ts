import { UserDB } from "../database/UserDB"

export class UserBusiness {

    constructor(
        private userDB: UserDB
    ) {}
    public get = async () => {
        const user = await this.userDB.getUser()

        const output = user
        return output
    }
}
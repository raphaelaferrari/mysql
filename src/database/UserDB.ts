import { BaseDatabase } from "./BaseDatabase";

export class UserDB extends BaseDatabase{

public static TABLE_NAME = 'users'

    public getUser =async () => {
        const resultado = await BaseDatabase.connection(UserDB.TABLE_NAME)
        .select()

        return resultado
    }
}
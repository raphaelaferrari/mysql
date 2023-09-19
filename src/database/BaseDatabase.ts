import { knex } from "knex";
import dotenv from 'dotenv';

dotenv.config()

export abstract class BaseDatabase {
  protected static connection = knex(
    {
      client: 'mysql2',
      connection: {
        host: process.env.MYSQL_HOST,
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DB_NAME
      },
      pool: {
        min: 2,
        max: 10
      }
    }
  )
}
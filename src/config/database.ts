import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv'
import { Contact } from "../model/Contact";
dotenv.config()

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as string;
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

  constructor() {
    this.connectToPostgreSQL()
  }

  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: 'postgres',
      models: [Contact]
    });

    this.sequelize.authenticate().then(()=>{
        console.log("✅ Postgres Connection is successful");
      }).catch((err)=>{
        console.log("❌ Postgres Connection is Failed", err);
    })
  }
}

export default Database

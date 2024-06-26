import express, { Application, Request, Response } from "express";
import Database from "./config/database";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.databaseSync();
    this.routes();
  }

  protected databaseSync():void{
    const db = new Database();
    db.sequelize?.sync()
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send(`Running`);
    });
  }
}

const port:number = 8000
const app = new App().app
app.listen(port, ()=>{
    console.log(`✅ Server running on PORT ${port}`);
    
})

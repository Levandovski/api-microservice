import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:'mysql',
    host:'localhost',
    username: "root",
    password: "",
    port:3306,
    database:"notepad",
    entities: ["./src/**/typeorm/entities/*.ts"],
    logging: true,  
    migrations: [
        "./src/typeorm/migrations/*.ts"
    ],    
})
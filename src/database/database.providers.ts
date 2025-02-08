import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./database.config";

export const databaseProviders  =[
    TypeOrmModule.forRoot(databaseConfig), 
];
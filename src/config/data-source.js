import { DataSource } from "typeorm";
import databaseConfig from "../../ormconfig.js";

export const AppDataSource = new DataSource(databaseConfig);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => {
        console.error("Error during Data Source initialization", error);
    });

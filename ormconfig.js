import "dotenv/config";

const databaseConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.js"],
    migrations: ["src/migrations/*.js"],
};

export default databaseConfig;

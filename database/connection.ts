import { Sequelize, Dialect } from "sequelize";

const sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
    dialect: process.env.DB_CONNECTION as Dialect,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialectModule: require("mysql2"),
});

export default sequelize;

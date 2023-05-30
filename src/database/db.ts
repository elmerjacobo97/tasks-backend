import { Sequelize, Dialect } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno

const dialect = process.env.DB_DIALECT as Dialect;
const host = process.env.DB_HOST as string;
const port = parseInt(process.env.DB_PORT as string);
const username = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD as string;
const database = process.env.DB_DATABASE as string;

const sequelize = new Sequelize(database, username, password, {
  dialect,
  host,
  port,
});

export { sequelize };

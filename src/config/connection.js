import "dotenv/config";
import { Sequelize } from "sequelize";
import config from "./configDB.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    /* eslint-disable no-console */
    console.log("✅ Database connection established");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

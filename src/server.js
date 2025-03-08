import "dotenv/config";
import express from "express";
import { connectDB } from "./config/connection.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";
import initRoutes from "./routes/index.js";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

initRoutes(app);
connectDB();

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`✅ Server running on port ${PORT}`);
});

export default server;

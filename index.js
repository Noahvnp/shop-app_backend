import "dotenv/config";
import express from "express";
import initRoutes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

initRoutes(app);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

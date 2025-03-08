import "dotenv/config";
import brandRoutes from "./brandRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import orderDetailsRoutes from "./orderDetailsRoutes.js";
import orderRoutes from "./orderRoutes.js";
import productRoutes from "./productRoutes.js";

const API_PREFIX = process.env.API_PREFIX || "/api";

const initRoutes = app => {
  const routes = [
    { path: "/products", route: productRoutes },
    { path: "/categories", route: categoryRoutes },
    { path: "/orders", route: orderRoutes },
    { path: "/order-details", route: orderDetailsRoutes },
    { path: "/brands", route: brandRoutes },
  ];

  routes.forEach(({ path, route }) => {
    app.use(`${API_PREFIX}${path}`, route);
  });

  app.get("/", (_, res) => res.status(200).json({ message: "Shop app is running..." }));

  return app;
};

export default initRoutes;

import "dotenv/config";
import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";
import orderRoutes from "./orderRoutes";
import orderDetailsRoutes from "./orderDetailsRoutes";
import brandRoutes from "./brandRoutes";

const API_PREFIX = process.env.API_PREFIX || "/api";

const initRoutes = (app) => {
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

  app.get("/", (_, res) =>
    res.status(200).json({ message: "Shop app is running..." })
  );

  return app;
};

export default initRoutes;

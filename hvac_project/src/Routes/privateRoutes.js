import { Route } from "react-router-dom";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import Orders from "../Pages/Orders/Orders";

export const privateRoutes = (
  <>
    <Route path="/don-hang" element={<AuthMiddleware />}>
      <Route path="" element={<Orders />} />
    </Route>
  </>
);

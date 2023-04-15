import { Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/gioi-thieu" element={<About />} />
  </>
);

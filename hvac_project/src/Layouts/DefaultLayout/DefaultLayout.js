import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { publicRoutes } from "../../Routes/publicRoutes";
import { privateRoutes } from "../../Routes/privateRoutes";
import Error404 from "../../Errors/Error404";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {publicRoutes}
          {privateRoutes}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

/*
Default layout

/ => Trang chủ
/san-pham => Trang sản phẩm

Shop Layout
/shop 
shop/order
shop/order-detail


*/

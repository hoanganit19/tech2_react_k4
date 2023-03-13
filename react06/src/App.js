import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Error from "./Pages/Error";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import OrderCancel from "./Pages/OrderCancel";
import Authentication from "./Services/Authentication";
import Account from "./Pages/Account";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham">
              <Route path="" element={<Products />} />
              <Route
                path="chi-tiet/:path.html"
                element={<ProductDetail />}
                exact
              />
            </Route>
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/don-hang" element={<Authentication />}>
              <Route path="" element={<Order />} />
              <Route path="don-da-huy" element={<OrderCancel />} />
              <Route path="ca-nhan">
                <Route path="tai-khoan" element={<Account />} />
              </Route>
            </Route>
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
/don-hang
/don-hang/dang-xu-ly
/don-hang/da-thanh-toan
/don-hang/da-huy

/admin
/admin/products
/admin/products/add
/admin/products/edit
/admin/products/delete
=> Nested Router
*/

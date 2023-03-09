import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
  handleClassNavLink = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };

  render() {
    return (
      <nav>
        <h2>Menus</h2>
        <ul className="nav flex-column">
          <li>
            <NavLink to="/" className={this.handleClassNavLink}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/gioi-thieu" className={this.handleClassNavLink}>
              Giới thiệu
            </NavLink>
          </li>
          <li>
            <NavLink to="/san-pham" className={this.handleClassNavLink}>
              Sản phẩm
            </NavLink>
          </li>
          <li>
            <NavLink to="/lien-he" className={this.handleClassNavLink}>
              Liên hệ
            </NavLink>
          </li>
          <li>
            <NavLink to="/don-hang" className={this.handleClassNavLink}>
              Đơn hàng
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header-sub.css";
import logo from "../../img/logo.png";

export default function Header_sub() {
  return (
    <div className="sidebar-left">
      <img src={logo} />
      <Link to="/trang-chu">
        <h5> Trang chủ</h5>
      </Link>
      <Link to="/danh-sach-san-pham">
        <h5> Sản phẩm</h5>
      </Link>
      <Link to="/tin-tuc">
        <h5>Blog</h5>
      </Link>
      <Link to="/lien-he">
        <h5>Liên hệ</h5>
      </Link>
    </div>
  );
}

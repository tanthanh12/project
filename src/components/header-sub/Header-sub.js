import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header-sub.css";
import logo from "../../img/logo.png";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

export default function Header_sub() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar-left">
      <img src={logo} />
      <Link to="/trang-chu">
        <h5> Trang chủ</h5>
      </Link>
      <UncontrolledAccordion stayOpen>
        <AccordionItem>
          <AccordionHeader targetId="1" ><Link to="/danh-sach-san-pham">Sản phẩm</Link></AccordionHeader>
          <AccordionBody accordionId="1">
            <a>Laptop</a>
            <br />
            <a>Điện thoại</a>
            <br />
            <a>Phụ kiện </a>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
      <Link to="/tin-tuc">
        <h5>Blog</h5>
      </Link>
      <Link to="/lien-he">
        <h5>Liên hệ</h5>
      </Link>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import logo from "../../img/logo.png";
import "./Header.css";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Container,
  NavbarText,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  InputGroup,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Header_sub from "../../components/header-sub/Header-sub";
import { AppContext } from "../../AppContext";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiShoppingCart } from "react-icons/ti";
import { LuFilter } from "react-icons/lu";
import FilterSub from "../filter-sub/Filter-sub";

export default function Header() {
  const { cart, setSearchResults } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle1 = () => setIsOpen2(!isOpen2);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState(" ");

  const openNav = () => {
    setIsOpen1(true);
  };

  const closeNav = () => {
    setIsOpen1(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos == 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products/search?query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
      navigate(`/search`);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="header">
      <div className="nav-header">
        <Container>
          <Navbar expand="md" style={{ top: visible ? "0" : "-100px" }}>
            <NavbarBrand href="/">
              <div className="image">
                <img src={logo} href="/trang-chu/" />
              </div>
            </NavbarBrand>
            <div className="icon ">
              <div
                className="find-glass"
                style={{ height: isOpen1 ? "150px" : "0" }}
              >
                <a href="#" className="closebtn" onClick={closeNav}>
                  x
                </a>
                <InputGroup onSubmit={handleSearch}>
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bạn cần tìm gì"
                  />
                  <div class="input-group-append">
                    <Button type="submit" href="/tim-kiem">
                      <HiMagnifyingGlass />
                    </Button>
                  </div>
                </InputGroup>
                {/* <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bạn tìm gì?"
                  />
                  <Button type="submit">
                    <HiMagnifyingGlass />
                  </Button>
                </form> */}
              </div>
              <Button className="openbtn" onClick={openNav}>
                <HiMagnifyingGlass />
              </Button>
              <Link to="/gio-hang">
                <div className="cart-icon">
                  <TiShoppingCart />
                  <div className="cart-count">{cart.length}</div>
                </div>
              </Link>
              <div className="filter-i">
                <Button className="openbtn-f" onClick={toggle1}>
                  <LuFilter />
                </Button>
                <Offcanvas direction="end" toggle={toggle1} isOpen={isOpen2}>
                  <OffcanvasHeader toggle={toggle1}></OffcanvasHeader>
                  <OffcanvasBody>
                    <FilterSub />
                  </OffcanvasBody>
                </Offcanvas>
              </div>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/trang-chu">Trang chủ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/danh-sach-san-pham">Sản phẩm</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tin-tuc">Tin tức</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lien-he">Liên hệ</NavLink>
                </NavItem>
                <NavbarText>
                  <NavLink>
                    <div
                      className="find-glass"
                      style={{ height: isOpen1 ? "150px" : "0" }}
                    >
                      <a href="#" className="closebtn" onClick={closeNav}>
                        x
                      </a>
                      <InputGroup onSubmit={handleSearch}>
                        <Input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Bạn cần tìm gì"
                        />
                        <div class="input-group-append">
                          <Button type="button" href="/tim-kiem">
                            <HiMagnifyingGlass />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <Button className="openbtn" onClick={openNav}>
                      <HiMagnifyingGlass />
                    </Button>
                  </NavLink>
                  <NavLink href="/gio-hang" className="cart-i">
                    <div className="cart-icon">
                      <TiShoppingCart />
                      <div className="cart-count">{cart.length}</div>
                    </div>
                  </NavLink>
                </NavbarText>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="sidebar">
        <Offcanvas toggle={toggle} isOpen={isOpen}>
          <OffcanvasHeader toggle={toggle}></OffcanvasHeader>
          <OffcanvasBody>
            <strong>
              <Header_sub />
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}

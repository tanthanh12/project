import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";
import Thumb from "../../components/thumb/Thumb";
import "./Product-list.css";
import Filter from "../../components/filter/Filter";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]); 
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setFilterProduct(res.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleFilter = (filteredData) => {
    setFilterProduct(filteredData);
  };
  return (
    <div>
      <Header />
      <Container>
        <div className="list-title">
          <div className="crumb">
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/trang-chu">
                  <i class="fa-solid fa-house"></i>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Tất cả sản phẩm</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <h5>TẤT CẢ SẢN PHẨM</h5>
        </div>
        <div className="list">
          <div className="left">
            <Filter onFilterChange = {handleFilter} />
          </div>
          <div className="right">
            <Row>
              {filterProduct.map((item) => (
                <Thumb
                  id={item.id}
                  key={item.id}
                  product={item}
                  name={item.name}
                  img={item.avatar}
                  price={item.pricecore}
                ></Thumb>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

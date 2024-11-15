import React, { useContext, useEffect, useState } from "react";
import "./ProductFilter.css";
import Thumb from "../../components/thumb/Thumb";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AppContext } from "../../AppContext";
import axios from "axios";

export default function ProductFilter() {
  const { searchResults } = useContext(AppContext);
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="filt-pro">
        <Container>
          <div>
            <Breadcrumb className="crumb">
              <BreadcrumbItem>
                <a href="/trang-chu">
                  <i className="fa-solid fa-house"></i>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Tìm kiếm</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Container>
        <Container>
          <div className="filt-con">
            <h1>Kết quả tìm kiếm</h1>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <Thumb
                  id={item.id}
                  key={item.id}
                  product={item}
                  name={item.name}
                  img={item.avatar}
                  price={item.pricecore}
                ></Thumb>
              ))
            ) : (
              <p>Không tìm thấy sản phẩm.</p>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

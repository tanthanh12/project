import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";
import Thumb from "../../components/thumb/Thumb";
import "./Product-list.css";
import Filter from "../../components/filter/Filter";
import { AppContext } from "../../AppContext";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [showDataList, setShowDataList] = useState(true);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const { filteredData, setFilteredData, handleFilterChange } =
    useContext(AppContext);
  const onFilterChange = (selectedItems, sliderValue) => {
    console.log("Đã thay đổi lọc dữ liệu: ", selectedItems, sliderValue);
  };
  const toggleView = () => {
    setShowDataList((prev) => !prev);
  };
  console.log(data);
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
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className="right">
            <Row className={showDataList ? "data-list" : "data-list hidden"}>
              {data.map((item, index) => (
                <Thumb key={index} product={item} />
              ))}
            </Row>
            <Row
              className={!showDataList ? "data-filter" : "data-filter hidden"}
            >
              {filteredData.map((item, index) => (
                <Thumb key={index} product={item} />
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

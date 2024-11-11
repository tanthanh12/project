import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import "./ProductFilter.css";
import axios from "axios";
import Thumb from "../../components/thumb/Thumb";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AppContext } from "../../AppContext";

export default function ProductFilter() {
  const { filteredData, setFilteredData, handleFilterChange,setSearchQuery } =
    useContext(AppContext);
  const getData = () => {
    const url = "https://658f810fcbf74b575ec9e34d.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setFilteredData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const onFilterChange = (selectedItems, sliderValue) => {
    console.log("Đã thay đổi lọc dữ liệu: ", selectedItems, sliderValue);
  };
  console.log(filteredData);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`https://658f810fcbf74b575ec9e34d.mockapi.io/products?q=${searchQuery}`);
      setFilteredData(response.data);
      setSearchQuery(searchQuery);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };
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
            <div className="left">
              <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="right">
              <Row>
                {filteredData.map((item, index) => (
                  <Thumb key={index} product={item} onSearch={handleSearch}/>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

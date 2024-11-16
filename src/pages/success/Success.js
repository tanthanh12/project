import { Row, Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./Success.css";
import React ,{ useEffect, useState } from "react";
import axios from "axios";
import Thumb from "../../components/thumb/Thumb";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";

export default function Success() {
  function getRandomProducts(products, numProducts) {
    const shuffled = products.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numProducts);
  }
  const [data, setData] = useState([]);
  const randomProducts = getRandomProducts(data, 4);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <>
    <Header/>
      <Container>
        <div className="success">
          <Breadcrumb className="crumb">
            <BreadcrumbItem>
              <a href="/trang-chu">
                <i class="fa-solid fa-house"></i>
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Thành công</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="top">
          <div className="block">
            <i class="fa-regular fa-thumbs-up"></i>
            <h6>Bạn đã đặt hàng thành công</h6>
          </div>
          <p>
            Mã đơn hàng: <span>IPD2579D11</span>
          </p>
          <p>
            Ngày đặt hàng: <span>15/03/2024</span>
          </p>
          <p>Cám ơn bạn đã đặt hàng ở Ketaro.</p>
          <p>Chúng tôi sẽ giao hàng đến bạn trong thời gian sớm nhất.</p>
        </div>
        <div className="bottom">
          <h3>Sản phẩm bán chạy</h3>
          <Row>
            {randomProducts.map((product, index) => (
              <Thumb key={index} product={product} />
            ))}
          </Row>
        </div>
      </Container>
      <Footer/>
      <ScrollToTopButton/>
    </>
  );
}

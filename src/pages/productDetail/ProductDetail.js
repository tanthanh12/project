import "./ProductDetail.css";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import axios from "axios";
import Product_detail_top from "../../components/product-detail-top/Product-detail-top";
import Thumb from "../../components/thumb/Thumb";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";

export default function ProductDetail() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null)
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

  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    if (productId && data.length > 0) {
      const selectedProduct = data.find((product) => product.id === productId);
      setProduct(selectedProduct);
    }
  }, [data]);
  function getRandomProducts(products, numProducts) {
    const shuffled = products.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numProducts);
  }
  const randomProducts = getRandomProducts(data, 4);
  return (
    <>
      <Header />
      <div className="product-detail-total">
        <Container>
          <Product_detail_top />
          <div className="related">
            <h3>Sản phẩm liên quan</h3>
            <Row>
              {randomProducts.map((product, index) => (
                <Thumb key={index} product={product} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

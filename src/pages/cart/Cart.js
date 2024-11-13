import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
  Table,
} from "reactstrap";
import "./Cart.css";
import Product_add from "../../components/product-add/Product-add";
import axios from "axios";
import { AppContext } from "../../AppContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";

export default function Cart() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const { cart, updateQty } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
      var array = num.toString().split("");
      var index = -3;
      while (array.length + index > 0) {
        array.splice(index, 0, separator);
        index -= 4;
      }
      return array.join("");
    }
  }
  function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
  }
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.pricecore,
    0
  );
  const allTotalPrice = totalPrice - totalPrice * 0.2;
  return (
    <div className="source-p">
      <Header />
      <Container>
        <div className="total-cart">
          <div>
            <Breadcrumb className="crumb">
              <BreadcrumbItem>
                <a href="/trang-chu">
                  <i className="fa-solid fa-house"></i>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Giỏ hàng</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="main-title">
            <h3>Giỏ hàng</h3>
          </div>
          <div className="cart">
            <div className="left">
              <div className="content-top">
                <div className="line">
                  <Row>
                    <Col md="6" xs="6 " className="name-title">
                      <FormGroup check>
                        <Input type="checkbox" />
                        <h6 check>Sản phẩm</h6>
                      </FormGroup>
                    </Col>
                    <Col md="2" xs="2">
                      <h6>Đơn giá</h6>
                    </Col>
                    <Col md="2" xs="2">
                      <h6>Số lượng</h6>
                    </Col>
                  </Row>
                </div>
                <div>
                  {cart.map((item, index) => (
                    <Product_add
                      key={index}
                      product={item}
                      updateQty={updateQty}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="right">
              <div className="content-bottom">
                <div className="temporary">
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <th scope="row">Tạm tính</th>
                        <td>{convertMoney(totalPrice)}</td>
                      </tr>
                      <tr>
                        <th scope="row">Khuyến mãi</th>
                        <td>-20%</td>
                      </tr>
                      <tr>
                        <th scope="row">Phí vận chuyển</th>
                        <td>0 đ</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="total-price">
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <th scope="row">Tổng tiền</th>
                        <td>
                          {totalPrice != 0 ? convertMoney(allTotalPrice) : 0} đ
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Điểm tích lũy</th>
                        <td>{Math.round(totalPrice / 10000)} điểm</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="order">
                  <Button href="/dia-chi">Đặt hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

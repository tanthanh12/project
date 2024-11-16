import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "./Product-detail-top.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider_product from "../slider-product/Slider-product";
import { AppContext } from "../../AppContext";

export default function Product_detail_top() {
  const { addCart, updateQty, cart } = useContext(AppContext);
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [data, setData] = useState(null);
  const getData = () => {
    const url = `https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products/${id}`;
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
  }, [id]);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const increment = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateQty(data.id, newQty);
    saveCartToLocalStorage();
  };

  const decrement = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      updateQty(data.id, newQty);
      saveCartToLocalStorage();
    }
  };
  const saveCartToLocalStorage = () => {
    localStorage.setItem("cart_list", JSON.stringify(cart));
  };

  const [activeColor, setActiveColor] = useState(null);
  const handleClick = (index) => {
    setActiveColor(index);
  };

  const [activeConfiguration, setActiveConfiguration] = useState(null);
  const handleClick1 = (index) => {
    setActiveConfiguration(index);
  };

  const [activeTab, setActiveTab] = useState();
  const toggleTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="product-detail">
      <Container>
        <div>
          <Breadcrumb className="crumb">
            <BreadcrumbItem>
              <a href="/trang-chu/">
                <i class="fa-solid fa-house"></i>
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>Sản phẩm</BreadcrumbItem>
            <BreadcrumbItem active>{data && data.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
      <div className="product-top">
        <div className="left">
          <Slider_product images={data && data.img} />
        </div>
        <div className="right">
          <div className="info">
            <h4>{data && data.name}</h4>
            <div className="price">
              <h3>{data && data.price}</h3>
            </div>
          </div>
          <div className="classify">
            <div className="color">
              <Row>
                <h5>Màu sắc</h5>
                <ul>
                  {data &&
                    data.color.map((color, index) => (
                      <li
                        key={index}
                        className={index === activeColor ? "li active" : "li"}
                        onClick={() => handleClick(index)}
                      >
                        {color}
                      </li>
                    ))}
                </ul>
              </Row>
            </div>
            {data && data.configuration && data.configuration.length > 0 && (
              <div className="size">
                <Row>
                  <h5>Cấu hình</h5>
                  <ul>
                    {data.configuration.map((configuration, index) => (
                      <li
                        key={index}
                        className={index === activeConfiguration ? "li active" : "li"}
                        onClick={() => handleClick1(index)}
                      >
                        {configuration}
                      </li>
                    ))}
                  </ul>
                </Row>
              </div>
            )}
            <div className="number">
              <ButtonGroup>
                <Button onClick={decrement}>-</Button>
                <span>{qty}</span>
                <Button onClick={increment}>+</Button>
              </ButtonGroup>
              <div className="button">
                <Button
                  className="buy"
                  href="/gio-hang"
                  onClick={() =>
                    addCart(
                      data.id,
                      data.color[activeColor],
                      data.name,
                      data.price,
                      data.avatar,
                      data.pricecore,
                      data.configuration[activeConfiguration]
                    )
                  }
                >
                  MUA NGAY
                </Button>
                <Button
                  className="add"
                  onClick={() =>
                    addCart(
                      data.id,
                      data.color[activeColor],
                      data.name,
                      data.price,
                      data.avatar,
                      data.pricecore,
                      data.configuration[activeConfiguration]
                    )
                  }
                >
                  THÊM VÀO GIỎ HÀNG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => toggleTab("1")}
            >
              Giới thiệu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggleTab("2")}
            >
              Review
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          {data && Array.isArray(data.desc) && data.desc.length > 0 && (
            <TabPane tabId="1">
              <Row>
                <h5>Đặc tính sản phẩm</h5>
                <Col sm="12">
                  {data.desc.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </Col>
              </Row>
            </TabPane>
          )}
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <p></p>
                <div className="product-review">
                  <div className="spr-container">
                    <div className="spr-header">
                      <h3 className="spr-header-title">Bình luận </h3>
                      <div className="spr-summary">
                        <span className="spr-summary-caption">
                          Chưa có bình luận
                        </span>
                      </div>
                      <div className="spr-content">
                        <div className="spr-form">
                          <Form id="form-review">
                            <Row>
                              <Col md={6}>
                                <FormGroup>
                                  <Label>Họ tên</Label>
                                  <Input
                                    placeholder="Nhập tên của bạn"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md={6}>
                                <FormGroup>
                                  <Label>Email</Label>
                                  <Input
                                    placeholder="Nhập email của bạn"
                                    type="email"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <FormGroup>
                              <Label>Lời bình luận</Label>
                              <Input
                                placeholder="Hãy viết cảm nghĩ của bạn về sản phẩm"
                                type="textarea"
                              />
                            </FormGroup>
                            <Button size="lg">Bình luận</Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p></p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

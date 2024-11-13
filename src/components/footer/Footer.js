import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import copyright from "../../img/copyright.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col md="3">
              <div className="info">
                <h5>Thông tin liên hệ</h5>
                <ul>
                  <li>
                    Địa chỉ: 515 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1,
                    Thành phố Hồ Chí Minh.
                  </li>
                  <li>Email: gotech@gmail.com</li>
                  <li>Phone: 0(1234) 567 890</li>
                </ul>
              </div>
            </Col>
            <Col md="3" className="buy">
              <h5>Chính sách mua hàng</h5>
              <div className="sub">
                <ul>
                  <li>
                    <Link to="#">Chính sách bảo hành</Link>
                  </li>
                  <li>
                    <Link to="#">Chính sách thanh toán</Link>
                  </li>
                  <li>
                    <Link to="#">Chính sách đổi trả</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3" className="support">
              <h5>Hỗ trợ khách hàng</h5>
              <div className="sub">
                <ul>
                  <li>
                    <Link to="#">Hướng dẫn mua hàng online</Link>
                  </li>
                  <li>
                    <Link to="#">Hướng dẫn chọn sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="#">Dịch vụ sửa chữa</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="footer-icon">
                <h5>Mạng xã hội</h5>
                <Link to="https://www.facebook.com/?locale=vi_VN">
                  <i class="fa-brands fa-facebook-f"></i>
                  <h6>Facebook</h6>
                </Link>
                <Link to="https://twitter.com/?lang=vi">
                  <i class="fa-brands fa-twitter"> </i>
                  <h6>Twitter</h6>
                </Link>
                <Link to="https://www.google.com.vn/?hl=vi">
                  <i class="fa-brands fa-google-plus-g"></i>
                  <h6>Google</h6>
                </Link>
                <Link to="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram"></i>
                  <h6>Instagram</h6>
                </Link>
              </div>
            </Col>
          </Row>
          <img className="copyright" src={copyright}></img>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md="6">
              <p>©2024 GoTech.com. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

import "./Payment.css";
import {
  Label,
  Input,
  FormGroup,
  Form,
  Button,
  Collapse,
  Toast,
  ToastHeader,
  ToastBody,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import React, { useState } from "react";
import acb from "../../img/logoBank/ACB.png";
import agribank from "../../img/logoBank/Agribank.png";
import bidv from "../../img/logoBank/BIDV.png";
import vietcombank from "../../img/logoBank/Vietcombank.png";
import vietinbank from "../../img/logoBank/Vietinbank.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleToggleCollapse = (collapseName) => {
    if (collapseName == "ATM") {
      setIsOpen(!isOpen);
      setIsOpen1(false);
    } else if (collapseName == "credit") {
      setIsOpen(false);
      setIsOpen1(!isOpen1);
    }
  };

  const [activebank, setActiveBank] = useState();
  const handle_click = (bank) => {
    setActiveBank(bank);
  };

  const [formData, setFormData] = useState({
    agree: false,
    requestInvoice: false,
  });
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <Container>
        <div className="pay">
          <div>
            <Breadcrumb className="crumb">
              <BreadcrumbItem>
                <a href="/trang-chu/">
                  <i className="fa-solid fa-house"></i>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Thanh toán</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <h3>Chọn hình thức thanh toán</h3>
          <div className="pay-top">
            <Form onSubmit={handleSubmit}>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Input
                    name="radio2"
                    type="radio"
                    onChange={() => handlePaymentMethodChange("COD")}
                  />
                  <Label check activeName="COD">
                    Thanh toán khi nhận hàng
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    activeName="ATM"
                    name="radio2"
                    type="radio"
                    onClick={() => handleToggleCollapse("ATM")}
                    onChange={() => handlePaymentMethodChange("ATM")}
                  />
                  <Label check>Thanh toán bằng thẻ ATM/Internet Banking</Label>
                  <Collapse isOpen={isOpen}>
                    <div className="p-6 my-2 rounded">
                      <Toast>
                        <ToastHeader>
                          Chọn ngân hàng mà bạn muốn thanh toán
                        </ToastHeader>
                        <ToastBody>
                          <img
                            src={acb}
                            id="acb"
                            className={activebank == "acb" ? "active" : ""}
                            onClick={() => handle_click("acb")}
                          />
                          <img
                            src={agribank}
                            id="agribank"
                            className={activebank == "agribank" ? "active" : ""}
                            onClick={() => handle_click("agribank")}
                          />
                          <img
                            src={bidv}
                            id="bidv"
                            className={activebank == "bidv" ? "active" : ""}
                            onClick={() => handle_click("bidv")}
                          />
                          <img
                            src={vietcombank}
                            id="vietcombank"
                            className={
                              activebank == "vietcombank" ? "active" : ""
                            }
                            onClick={() => handle_click("vietcombank")}
                          />
                          <img
                            src={vietinbank}
                            id="vietinbank"
                            className={
                              activebank === "vietinbank" ? "active" : ""
                            }
                            onClick={() => handle_click("vietinbank")}
                          />
                        </ToastBody>
                      </Toast>
                    </div>
                  </Collapse>
                </FormGroup>
                <FormGroup check>
                  <Input
                    activeName="credit"
                    name="radio2"
                    type="radio"
                    onClick={() => handleToggleCollapse("credit")}
                    onChange={() => handlePaymentMethodChange("credit")}
                  />
                  <Label check>Thanh toán bằng thẻ tín dụng</Label>
                  <Collapse isOpen={isOpen1}>
                    <div className="p-6 my-2 rounded ">
                      <Toast>
                        <ToastHeader>Thông tin thẻ</ToastHeader>
                        <ToastBody>
                          <FormGroup>
                            <Label>Số thẻ</Label>
                            <Input id="form-input" type="number" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Họ tên chủ thẻ</Label>
                            <Input id="form-input" type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Ngày hết hạn</Label>
                            <Input id="form-input" type="date" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Số CVV</Label>
                            <Input id="form-input" type="number" />
                          </FormGroup>
                        </ToastBody>
                      </Toast>
                    </div>
                  </Collapse>
                </FormGroup>
              </FormGroup>
            </Form>
          </div>
          <div className="agree">
            <FormGroup check>
              <Input
                id="checkbox1"
                type="checkbox"
                name="agree"
                onChange={handleCheckboxChange}
              />
              <Label check>
                Tôi đồng ý với thỏa thuận bảo mật và chính sách mua hàng của
                KetaroShop
              </Label>
            </FormGroup>
          </div>
          <div className="request">
            <FormGroup check>
              <Input
                id="checkbox2"
                type="checkbox"
                name="requestInvoice"
                onChange={handleCheckboxChange}
              />
              <Label check>Yêu cầu xuất hóa đơn GTGT cho đơn hàng này</Label>
            </FormGroup>
            <div className="pay-button">
              <Button
                type="submit"
                size="lg"
                href="/thanh-cong"
                disabled={!formData.agree || !paymentMethod}
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

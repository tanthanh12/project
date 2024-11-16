import React, { useState, useRef } from "react";
import {
  Form,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Container,
  Button,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: true,
    phoneNumber: true,
    email: true,
    message: true,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu hợp lệ
    const newValidation = {
      name: formData.name.trim() !== "",
      phoneNumber: /^\d{10}$/.test(formData.phoneNumber),
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() !== "",
    };

    setValidation(newValidation);

    if (Object.values(newValidation).every((isValid) => isValid)) {
      setLoading(true); // Đang gửi email

      // Gửi email bằng EmailJS
      emailjs
        .sendForm(
          'service_gq38fcs', 
          'template_xdi9c47', 
          form.current, 
          'vaeYWFragdA48f87E' // public key của bạn
        )
        .then(
          () => {
            // Reset form sau khi gửi thành công
            setFormData({
              name: "",
              phoneNumber: "",
              email: "",
              message: "",
            });
            setValidation({
              name: true,
              phoneNumber: true,
              email: true,
              message: true,
            });
            setSuccessMessage("Cảm ơn bạn! Email của bạn đã được gửi thành công.");
            setTimeout(() => setSuccessMessage(""), 5000); // Ẩn thông báo sau 5 giây
          },
          (error) => {
            console.error("Lỗi khi gửi email:", error); // Log lỗi đầy đủ
            setSuccessMessage(`Gửi email thất bại: ${error.message || 'Không có thông tin lỗi cụ thể.'}`);
          }
        )
        .finally(() => {
          setLoading(false); // Tắt trạng thái loading
        });
    }
  };

  return (
    <>
      <Header />
      <div className="contact-form">
        <Container>
          <div className="title-contact">
            <h3>Liên hệ với chúng tôi</h3>
            <p>Vui lòng liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào</p>
          </div>
          <Form className="form" onSubmit={handleSubmit} ref={form}>
            <FormGroup>
              <Label for="name">Họ và tên</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                invalid={!validation.name}
              />
              <FormFeedback invalid>Tên không được để trống</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Số điện thoại</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                invalid={!validation.phoneNumber}
              />
              <FormFeedback invalid>Số điện thoại không hợp lệ</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                invalid={!validation.email}
              />
              <FormFeedback invalid>Email không hợp lệ</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="message">Lời nhắn</Label>
              <Input
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                invalid={!validation.message}
              />
              <FormFeedback invalid>Vui lòng nhập lời nhắn của bạn</FormFeedback>
            </FormGroup>
            <Button type="submit" disabled={loading}>
              {loading ? "Đang gửi..." : "Gửi"}
            </Button>
            {successMessage && (
              <div className={`success-message ${successMessage.includes("thành công") ? "success" : "error"}`}>
                {successMessage}
              </div>
            )}
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
}

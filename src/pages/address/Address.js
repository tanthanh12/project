import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  FormFeedback,
} from "reactstrap";
import { Form, FormGroup, Label, Input, Row } from "reactstrap";
import "./Address.css";
import axios from "axios";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";

export default function Address() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedResult, setSelectedResult] = useState("");
  const [nameform, setNameform] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [addressform, setAddressform] = useState("");
  const [note, setNote] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://vapi.vnappmob.com/api/province/"
        );
        setProvinces(response.data.results);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchProvinces();
  }, []);

  const fetchDistricts = async (provinceId) => {
    try {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${provinceId}`
      );
      setDistricts(response.data.results);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const fetchWards = async (districtId) => {
    try {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/ward/${districtId}`
      );
      setWards(response.data.results);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
    setSelectedWard("");
    fetchDistricts(provinceId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedWard("");
    fetchWards(districtId);
  };

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };

  useEffect(() => {
    if (selectedProvince && selectedDistrict && selectedWard) {
      setSelectedResult(
        `${selectedProvince} | ${selectedDistrict} | ${selectedWard}`
      );
    }
  }, [selectedProvince, selectedDistrict, selectedWard]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };
  const handleSubmitAndRedirect = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (
      nameform &&
      telephone &&
      email &&
      selectedProvince &&
      selectedDistrict &&
      selectedWard &&
      addressform &&
      note
    ) {
      window.location.href = "/thanh-toan";
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className="address">
          <div className="address-form">
            <div>
              <Breadcrumb className="crumb">
                <BreadcrumbItem>
                  <a href="/trang-chu/">
                    <i className="fa-solid fa-house"></i>
                  </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Địa chỉ giao hàng</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <h3>Chọn địa chỉ giao hàng</h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="nameform">Họ và tên</Label>
                <Input
                  id="nameform"
                  name="nameform"
                  type="text"
                  value={nameform}
                  onChange={(e) => setNameform(e.target.value)}
                  invalid={isFormSubmitted && !nameform}
                />
                {isFormSubmitted && !nameform && (
                  <FormFeedback>Họ và tên không được để trống</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="telephone">Số điện thoại</Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="number"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  invalid={isFormSubmitted && !telephone}
                />
                {isFormSubmitted && !telephone && (
                  <FormFeedback>Số điện thoại không hợp lệ</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  invalid={isFormSubmitted && !email}
                />
                {isFormSubmitted && !email && (
                  <FormFeedback>Email không hợp lệ</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="province">Tỉnh / Thành phố</Label>
                <Input
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  type="select"
                  invalid={isFormSubmitted && !selectedProvince}
                >
                  <option value="" disabled>
                    Chọn tỉnh thành
                  </option>
                  {provinces.map((province) => (
                    <option
                      key={province.province_id}
                      value={province.province_id}
                    >
                      {province.province_name}
                    </option>
                  ))}
                </Input>
                {isFormSubmitted && !selectedProvince && (
                  <FormFeedback>Vui lòng chọn Tỉnh / Thành phố</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="district">Quận / Huyện</Label>
                <Input
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  type="select"
                  invalid={isFormSubmitted && !selectedDistrict}
                >
                  <option value="" disabled>
                    Chọn quận huyện
                  </option>
                  {districts.map((district) => (
                    <option
                      key={district.district_id}
                      value={district.district_id}
                    >
                      {district.district_name}
                    </option>
                  ))}
                </Input>
                {isFormSubmitted && !selectedDistrict && (
                  <FormFeedback>Vui lòng chọn Quận / Huyện</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="ward">Phường / Xã</Label>
                <Input
                  value={selectedWard}
                  onChange={handleWardChange}
                  type="select"
                  invalid={isFormSubmitted && !selectedWard}
                >
                  <option value="" disabled>
                    Chọn phường xã
                  </option>
                  {wards.map((ward) => (
                    <option key={ward.ward_id} value={ward.ward_id}>
                      {ward.ward_name}
                    </option>
                  ))}
                </Input>
                {isFormSubmitted && !selectedWard && (
                  <FormFeedback>Vui lòng chọn Phường / Xã</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="addressform">Số nhà / Tên đường</Label>
                <Input
                  id="addressform"
                  name="addressform"
                  type="text"
                  value={addressform}
                  onChange={(e) => setAddressform(e.target.value)}
                  invalid={isFormSubmitted && !addressform}
                />
                {isFormSubmitted && !addressform && (
                  <FormFeedback>
                    Số nhà và tên đường không được để trống
                  </FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="note">Điều cần lưu ý</Label>
                <Input
                  id="note"
                  name="note"
                  value={note}
                  type="textarea"
                  onChange={(e) => setNote(e.target.value)}
                  invalid={isFormSubmitted && !note}
                />
                {isFormSubmitted && !note && (
                  <FormFeedback>Vui lòng nhập lời nhắn của bạn</FormFeedback>
                )}
              </FormGroup>
              <div>
                <Row className="countine-button">
                  <Button
                    type="submit"
                    size="lg"
                    onClick={handleSubmitAndRedirect}
                  >
                    Tiếp tục
                  </Button>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

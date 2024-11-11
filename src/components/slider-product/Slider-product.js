import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Card, CardImg, Row } from "reactstrap";
import "./Slider-product.css";

export default function Slider_product() {
  const [data, setData] = useState({ classify: [] });
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const baseUrl = `https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products/${id}`;
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  const settings = {
    customPaging: function (i) {
      return (
        <Row>
          <a className="thumbnail">
            <img src={data.imgSrc[i]} alt={`Thumbnail ${i}`} />
          </a>
        </Row>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
        <Slider {...settings}>
          {data.imgSrc.map((img, index) => (
            <Card key={index}>
              <CardImg src={img} alt={`Slide ${index}`} top width="100%" />
            </Card>
          ))}
        </Slider>
    </div>
  );
}

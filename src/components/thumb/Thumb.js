import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import "./Thumb.css";
export default function Thumb(props) {
  const { product } = props;
  function cutShortWithoutCuttingWords(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    let lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    let shortenedText = text.substring(0, lastSpaceIndex);
    return shortenedText;
  }
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

  return (
    <Col lg={3} md={4} sm={6} xs={6}>
      <div className="each-one">
        <Link to={`/chi-tiet-san-pham/${product.id}`}>
          <Card>
            <CardImg src={product.avatar} top width="100%" />
            <CardBody>
              <CardTitle tag="p"> {product ?  cutShortWithoutCuttingWords(product.name, 30) : " "}</CardTitle>
              <CardText tag="h6">{convertMoney(product.pricecore)}đ </CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    </Col>
  );
}

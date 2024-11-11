import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";
import "./Card-news4.css";

export default function Card_news4(props) {
  const { news } = props;
  return (
    <Col md="4" sm="6">
      <div className="card4">
        <Link to="/blog-detail/">
          <Card>
            <CardImg src={news.imgSrc} top width="100%" />
            <CardBody>
              <CardTitle tag="h6">{news.name}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      </div>
    </Col>
  );
}

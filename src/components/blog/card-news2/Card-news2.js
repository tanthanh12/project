import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import "./Card-news2.css";

export default function Card_news2(props) {
  const { news } = props;
  return (
    <div className="card2">
      <Link to="/blog-detail/">
        <Card>
          <CardImg src={news.imgSrc} top width="100%" />
          <CardBody>
            <CardTitle tag="h6">{news.name}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

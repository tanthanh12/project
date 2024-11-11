import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import "./Card-news.css";

export default function Card_news(props) {
  const { news } = props;
  return (
    <div className="card1">
      <Link to="/blog-detail/">
        <Card>
          <CardImg src={news.imgSrc} top width="100%" />
          <CardBody>
            <CardTitle tag="h6">{news.name}</CardTitle>
            <CardText tag="p">{news.desc}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

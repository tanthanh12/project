import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Row } from "reactstrap";
import "./Body.css";
import Thumb from "../thumb/Thumb";
import { Link } from "react-router-dom";
import Card_news4 from "../blog/card-news4/Card-news4";
import { AiOutlineDoubleRight } from "react-icons/ai";
import banner1 from "../../img/banner1.png";

export default function Body() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/products";
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
  }, []);
  console.log(data);

  const [news, setNews] = useState([]);
  const getNews = () => {
    const url1 = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/news";
    axios
      .get(url1)
      .then((res) => {
        setNews(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(news);

  return (
    <>
      <div className="body">
        <Container>
          <div className="home-content">
            <div className="new-arrivals">
              <div className="title">
                <h3>TOP BÁN CHẠY</h3>
              </div>
              <Row>
                {data
                  .filter((item) => item.id < 5)
                  .map((item, index) => (
                    <Thumb key={index} product={item} />
                  ))}
              </Row>
            </div>
            <div className="featured-collection">
              <div className="title">
                <h3>TOP NỔI BẬT</h3>
              </div>
              <Row>
                {data
                  .filter((item) => item.id > 6 && item.id < 11)
                  .map((item, index) => (
                    <Thumb key={index} product={item} />
                  ))}
              </Row>
            </div>
            <div className="sale-off">
              <img src={banner1} />
            </div>
            <div className="title">
              <h4>Gợi ý cho bạn</h4>
            </div>
            <div className="product-list-home">
              <Row>
                {data.slice(4, 12).map((item, index) => (
                  <Thumb key={index} product={item} />
                ))}
              </Row>
            </div>
            <div className="blog">
              <div className="title">
                <h4>TIN TỨC</h4>
                <Link to="/tin-tuc/">
                  <span>XEM THÊM</span>
                  <AiOutlineDoubleRight />
                </Link>
              </div>
              <Row>
                {news.slice(0, 3).map((item, index) => (
                  <Card_news4 key={index} news={item} />
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

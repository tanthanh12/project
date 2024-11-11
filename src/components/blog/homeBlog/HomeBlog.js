import axios from "axios";
import React ,{ useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Card_news from "../card-news/Card-news"
import Card_news2 from "../card-news2/Card-news2";
import Card_news3 from "../card-news3/Card-news3";
import "./HomeBlog.css";

export default function HomeBlog() {
  const [data, setData] = useState([]);
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/news";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="cate">
        <Container>
          <div className="section1">
          <h3>BÀI VIẾT MỚI</h3>
            <Row>
              <div className="banner-group">
                <div className="banner">
                  {data.map((item, index) => {
                    if (item.id == 1) {
                      return (
                        <Card_news key={index} news={item}/>
                      );
                    }
                  })}
                </div>
                <div className="banner1">
                {data.map((item, index) => {
                    if (item.id == 1) {
                      return (
                        <Card_news2 key={index} news={item}/>
                      );
                    }
                  })}
                </div>
                <div className="next-to-banner">
                    {data.map((item, index) => {
                      if (item.id <4 && item.id !=1 )
                        return (
                          <Card_news2 key={index} news={item}/>
                        );
                    })}
                  </div>
              </div>
            </Row>
          </div>
          <div className="section2">
            <h3>TẤT CẢ BÀI VIẾT</h3>
            {data.map((item, index) => {
              if (item.id > 3)
                return (
                  <Card_news3 key={index} news={item}/>
                );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

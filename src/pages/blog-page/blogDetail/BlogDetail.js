import "./BlogDetail.css";
import React, { useEffect, useState } from "react";
import Card_news4 from "../../../components/blog/card-news4/Card-news4";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "reactstrap";
import Blog_sub from "../../../components/blog/blogDetail-sub/Blog-sub";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ScrollToTopButton from "../../../components/scroll-to-top/ScrollTop";

export default function BlogDetail() {
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
      <Header />
      <div className="crumb-news">
        <Breadcrumb className="crumb">
          <BreadcrumbItem>
            <a href="/trang-chu/">
              <i class="fa-solid fa-house"></i>
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/tin-tuc/">Tin tức</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Hướng dẫn cách lấy nhạc YouTube làm nhạc chuông cực đơn giản chắc bạn sẽ cần</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="article">
        <Blog_sub />
        <div className="related-blog">
          <h5 class="titlerelate">Bài viết liên quan</h5>
          <div className="related-news">
            <Row>
              {data
                .filter((item) => item.id > 7)
                .map((item, index) => (
                  <Card_news4 key={index} news={item} />
                ))}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

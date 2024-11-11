import React from "react";
import "./HomeBlogPage.css";
import HomeBlog from "../../../components/blog/homeBlog/HomeBlog";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import ScrollToTopButton from "../../../components/scroll-to-top/ScrollTop";

export default function HomeBlogPage() {
  return (
    <div className="home-blog">
       <Header /> 
      <Container>
        <div>
          <Breadcrumb className="crumb">
            <BreadcrumbItem>
              <a href="/trang-chu/">
                <i class="fa-solid fa-house"></i>
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Tin tức</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
      <HomeBlog />
       <Footer /> 
       <ScrollToTopButton/>
    </div>
  );
}

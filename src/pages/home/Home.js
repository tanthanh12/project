import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import React from "react";
import ScrollToTopButton from "../../components/scroll-to-top/ScrollTop";
import Phone from "../../components/phone/Phone";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner/>
      <Body />
      <Footer />
      <Phone/>
      <ScrollToTopButton/>
    </div>
  );
}

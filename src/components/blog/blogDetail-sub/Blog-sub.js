import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog-sub.css";
import { Container } from "reactstrap";

export default function Blog_sub() {
  const [data, setData] = useState();
  const getData = () => {
    const url = "https://6518dbbd818c4e98ac5ff3ae.mockapi.io/news/1";
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
  return (
    <div className="sub-blog">
      <div className="title">
        <h4>{data && data.name}</h4>
      </div>
      <div className="userdetail">
        <div>{data && data.content && data.content.poster}</div>
        <span>1 giờ trước</span>
      </div>
      <div className="news-content">
        <Container>
          <div className="title-detail">
            <img src={data && data.imgSrc} />
            <p>{data && data.desc}</p>
          </div>
          <div className="fist-content">
            <h5>{data && data.content && data.content.title}</h5>
            <p>{data && data.content && data.content.purport[0]}</p>
          </div>
          <div className="step1">
            <p>{data && data.content && data.content.purport[1]}</p>
            <img src={data && data.content && data.content.img[0]} />
          </div>
          <div className="step2">
            <p>{data && data.content && data.content.purport[2]}</p>
            <img src={data && data.content && data.content.img[1]} />
          </div>
          <div className="step3">
            <p>{data && data.content && data.content.purport[3]}</p>
            <img src={data && data.content && data.content.img[2]} />
          </div>
          <div className="step4">
            <p>{data && data.content && data.content.purport[4]}</p>
            <img src={data && data.content && data.content.img[3]} />
          </div>
          <div className="step5">
            <p>{data && data.content && data.content.purport[5]}</p>
            <img src={data && data.content && data.content.img[4]} />
          </div>
          <div className="step6">
            <p>{data && data.content && data.content.purport[6]}</p>
            <img src={data && data.content && data.content.img[5]} />
          </div>
          <div className="final-content">
            <p>{data && data.content && data.content.purport[7]}</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

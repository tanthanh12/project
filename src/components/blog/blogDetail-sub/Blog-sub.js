import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Blog-sub.css";

export default function Blog_sub() {
  const [data, setData] = useState();
  const getData = () => {
    const url = "https://658f810fcbf74b575ec9e34d.mockapi.io/news/1";
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
        <div>{data && data.content && data.content.editor}</div>
        <span>1 giờ trước</span>
      </div>
      <div className="news-content">
        <div className="title-detail">
          {data && data.content && data.content.title}
          <img src={data && data.content && data.content.img[0]} />
        </div>
        <div className="creative">
          <h6>{data && data.content && data.content.subtitle[0]}</h6>
          <img src={data && data.content && data.content.img[1]} />
          <p>{data && data.content && data.content.purport[1]}</p>
          <p>{data && data.content && data.content.purport[2]}</p>
        </div>
        <div className="collector">
          <h6>{data && data.content && data.content.subtitle[1]}</h6>
          <img src={data && data.content && data.content.img[2]} />
          <p>{data && data.content && data.content.purport[3]}</p>
          <p>{data && data.content && data.content.purport[4]}</p>
        </div>
        <div className="curious">
          <h6>{data && data.content && data.content.subtitle[2]}</h6>
          <img src={data && data.content && data.content.img[3]} />
          <p>{data && data.content && data.content.purport[5]}</p>
          <p>{data && data.content && data.content.purport[6]}</p>
        </div>
        <div className="gaston ">
          <h6>{data && data.content && data.content.subtitle[3]}</h6>
          <img src={data && data.content && data.content.img[4]} />
          <p>{data && data.content && data.content.purport[7]}</p>
        </div>
      </div>
    </div>
  );
}

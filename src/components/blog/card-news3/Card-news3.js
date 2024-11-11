import React from "react";
import { Link } from "react-router-dom";
import "./Card-news3.css";

export default function Card_news3(props) {
  const { news } = props;

  function cutShortWithoutCuttingWords(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    let lastSpaceIndex = text.lastIndexOf(' ', maxLength);
    let shortenedText = text.substring(0, lastSpaceIndex) + '...';
    return shortenedText;
  }

  return (
    <div className="card3">
       <Link to="/blog-detail/">
       <div className="e-card e-card-horizontal">
      <img src={news.imgSrc} alt="Sample" />
      <div className="e-card-stacked">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title">
              <h5>{news.name}</h5>
            </div>
          </div>
        </div>
        <div className="e-card-content">
          {news ?  cutShortWithoutCuttingWords(news.desc, 200) + "..." : " "}
        </div>
      </div>
      </div>
      </Link>
    </div>
  );
}

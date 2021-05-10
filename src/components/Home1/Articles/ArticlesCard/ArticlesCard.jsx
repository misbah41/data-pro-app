/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ArticleCard.css'
const ArticlesCard = ({ articleData }) => {
  return (
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="blog-post-item mb-60 wow fadeInUp">
        <div class="post-thumbnail">
          <img src={articleData.blogImg} alt="Blog-preview" />
          <a href="#" class="blog-date">
            {articleData.blogDate}
          </a>
        </div>
        <div class="artcle-contents">
          <div class="post-meta">
            <ul>
              <li>
                <span className='artichleIcon'>
                  <FontAwesomeIcon icon={articleData.blogByIcon} />
                  <a  href="#">{articleData.blogBy}</a>
                </span>
              </li>
              <li>
                <span className='artichleIcon'>
                  <FontAwesomeIcon icon={articleData.blogByAirIcon} />
                  <a href="#">{articleData.airContent}</a>
                </span>
              </li>
            </ul>
          </div>
          <h3 class="title">
            <a href="blog_details.html">{articleData.blogTitle}</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;

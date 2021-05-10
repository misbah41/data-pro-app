/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ArticlesCard from "./ArticlesCard/ArticlesCard";
import { articlesData } from "./ArticlesData";
import '../../Share/style.css'
const Articles = () => {
  return (
    <section className="blog-area-v1 pt-110 pb-60" id="blog">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center mb-70 wow fadeInUp">
              <span className="span">Latest News</span>
              <h2>Our Insights & Articles</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {articlesData.map((articleData) => (
            <ArticlesCard  articleData={articleData}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

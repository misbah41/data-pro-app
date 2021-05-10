import React from "react";
import "./Banner.css";
import HeroImg from './bannerImg.png';

const growth = 'We Take Care Your Business Growth';

const Banner = () => {
  return (
    <section className="hero-area bg_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="span wow fadeInUp">MARKETS & RESOURCES</span>
              <h1>{growth}</h1>
              <a className='main-btn' href="http://" target="_blank" rel="noopener noreferrer">Get a Quote</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

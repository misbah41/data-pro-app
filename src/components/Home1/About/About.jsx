import React from "react";
import AboutUsImg from "./about-us.jpg";
import AboutCard from "./AboutCard/AboutCard";
import { AboutCardData } from "./AboutCardData";
import { aboutContent } from "./AboutContent";
const About = () => {
  return (
    <section class="about-area-v1 pt-120 pb-40" id="about">
      <div class="container">
        <div class="row align-items-xl-center">
          <div class="col-lg-6">
            <div class="about-img mb-80 wow fadeInLeft">
              <img src={AboutUsImg} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content-box mb-80">
              <div class="section-title mb-25 wow fadeInUp">
                <span class="span">{aboutContent.aboutPost}</span>
                <h2>{aboutContent.aboutTitle}</h2>
              </div>
              <p>{aboutContent.aboutDesc}</p>
              {AboutCardData.map((data) => (
                <AboutCard aboutData={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

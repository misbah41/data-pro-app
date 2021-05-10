import React from "react";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testiMonialData } from "./TestimonialsData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section class="testimonials-area pb-120 bg_cover" id="testimonial">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title section-title-white text-center mb-75 wow fadeInUp">
              <span class="span">Client Testimonials</span>
              <h2>What our clients say </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="testimonial-slider-one wow fadeInUp">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 2,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                {testiMonialData.map((data) => (
                  <TestimonialCard data={data} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

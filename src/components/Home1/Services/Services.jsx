import React from "react";
// import '../../Share/style.css'
import { servicesData } from "./ServicesData";
import ServicessCard from "./ServicessCard/ServicessCard";

const Services = () => {
  return (
    <section class="service-area service-area-v1 pb-90" id="service">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title mb-70 text-center wow fadeInUp">
              <span class="span">what we do</span>
              <h2>
                We are optimists who love <br /> to work together.
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {servicesData.map((serviceData) => (
            <div class="col-xl-4 col-lg-6 col-md-6">
              {" "}
              <ServicessCard serviceData={serviceData} />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

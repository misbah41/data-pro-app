/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrandData, Brands } from "./ClientsBarnd";

const Clients = () => {
  return (
    <section class="our-clients pt-125 pb-85">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="clients-content-box mb-40">
              <div class="section-title mb-15 wow fadeInUp">
                <h2>{BrandData.brandTitle}</h2>
              </div>
              <p>{BrandData.brandPost}</p>
              <a href="#" class="site-btn" style={{ textDecoration: "none" }}>
                {BrandData.brandBtn}
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="clients-img-box mb-40 wow fadeInUp">
              <ul class="clients-imgs">
                {Brands.map((brand) => (
                  <li>
                    <a href="#">
                      <img src={brand} alt="Client-img" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

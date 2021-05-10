import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="footer-area-v1">
      <div class="footer-widget-area">
        <div class="container">
          <div class="footer-top wow fadeInUp">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-3 col-md-4 text-center">
                <div class="footer-logo text-center mb-20">
                  <a href="#" class="datapro_logo">
                    <img src="assets/img/main-logo-2.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-8">
                <div class="newsletter-item mb-20">
                  <form action="#">
                    <div class="form_group">
                      <input
                        type="email"
                        class="form_control"
                        placeholder="Email Address"
                        required
                      />
                      <button class="main-btn">
                        <i class="fa fa-envelope"></i> Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="social-media-links mb-20">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-widget pt-85 mb-60">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="widget about-widget mb-45 wow fadeInUp">
                  <h4 class="widget-title">About Us</h4>
                  <p>
                    The quick, brown fox jumps over a lazy dog. DJs flock by
                    when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    Bawds jogvex
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-12">
                <div class="widget widget-categories mb-45 wow fadeInUp">
                  <h4 class="widget-title">Links</h4>
                  <ul class="widget-link">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Team Member</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="widget recent-post-widget mb-45 wow fadeInUp">
                  <h4 class="widget-title">Recent Posts</h4>
                  <div class="recent-post">
                    <div class="post-item">
                      <img src="assets/img/blogs/thumb-1.jpg" alt="" />
                      <div class="post-content">
                        <span class="post-date">
                          <a href="#">December 7, 2021</a>
                        </span>
                        <h6 class="title">
                          <a href="blog_details.html">
                            Bigg Ideas Of Business Branding Info.
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div class="post-item">
                      <img src="assets/img/blogs/thumb-2.jpg" alt="" />
                      <div class="post-content">
                        <span class="post-date">
                          <a href="#">December 7, 2021</a>
                        </span>
                        <h6 class="title">
                          <a href="blog_details.html">
                            Bigg Ideas Of Business Branding Info.
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="widget contact-widget mb-45 wow fadeInUp">
                  <h4 class="widget-title">Contuct Us</h4>
                  <div class="contact-info">
                    <p>
                      <i class="fa fa-map-marker-alt"></i>66 Broklyant, India
                      3269 Road.
                    </p>
                    <p>
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:yourmail.@gmail.com">
                        yourmail.@gmail.com
                      </a>
                    </p>
                    <p>
                      <i class="fa fa-phone"></i>
                      <a href="tel:0123456789101"> 012 345 678 9101</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text text-center">
                <p>Copyright 2021 by yoursite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

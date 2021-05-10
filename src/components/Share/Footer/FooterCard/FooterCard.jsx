import React from "react";

const FooterCard = ({data}) => {
  return (
    <div className='row'>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="widget about-widget mb-45 wow fadeInUp">
          <h4 class="widget-title">{data.footerMenu}</h4>
          <p>
          {data.footerPost}
          </p>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-12">
        <div class="widget widget-categories mb-45 wow fadeInUp">
          <h4 class="widget-title">{data.footerMenu}</h4>
          <ul class="widget-link">
            <li>
              <a href="#">{data.footerLink1}</a>
            </li>
            <li>
              <a href="#">{data.footerLink2}</a>
            </li>
            <li>
              <a href="#">{data.footerLink3}</a>
            </li>
            <li>
              <a href="#">{data.footerLink4}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="widget recent-post-widget mb-45 wow fadeInUp">
          <h4 class="widget-title">{data.footerMenu}</h4>
          <div class="recent-post">
            <div class="post-item">
              <img src="assets/img/blogs/thumb-1.jpg" alt="" />
              <div class="post-content">
                <span class="post-date">
                  <a href="#">{data.footerLink1}</a>
                </span>
                <h6 class="title">
                  <a href="blog_details.html">
                  {data.footerPost}
                  </a>
                </h6>
              </div>
            </div>
            <div class="post-item">
              <img src="assets/img/blogs/thumb-2.jpg" alt="" />
              <div class="post-content">
                <span class="post-date">
                  <a href="#">{data.footerLink2}</a>
                </span>
                <h6 class="title">
                  <a href="blog_details.html">
                  {data.footerPost2}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="widget contact-widget mb-45 wow fadeInUp">
          <h4 class="widget-title">{data.footerMenu}</h4>
          <div class="contact-info">
            <p>
              <i class="fa fa-map-marker-alt"></i>{data.footerPost}
            </p>
            <p>
              <i class="fa fa-envelope"></i>
              <a href="mailto:yourmail.@gmail.com">{data.footerLink1}</a>
            </p>
            <p>
              <i class="fa fa-phone"></i>
              <a href="tel:0123456789101"> {data.footerLink2}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;

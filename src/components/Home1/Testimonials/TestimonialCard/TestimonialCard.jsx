import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <div class="single-testimonial">
      <div class="testimonial-user-info mb-50">
        <div class="user-thumb-title">
          <div class="thumb">
            <img src={data.clientAvatar} alt="testimonial-user-img" />
          </div>
          <div class="title">
            <h5>{data.clientName}</h5>
            <p class="position">{data.clientPosi}</p>
          </div>
        </div>
        <div class="quote">
          <i class="fa fa-quote-left"></i>
        </div>
      </div>
      <p>{data.clientSay}</p>
    </div>
  );
};

export default TestimonialCard;

import React from "react";

const AwardCard = ({ data }) => {
  return (
    <div class="col-lg-3 col-md-6">
      <div class="single-counter mb-40 wow fadeInUp">
        <div class="icon">
          <img src={data.projectImg} alt="icons" />
        </div>
        <div class="info">
          <h2>
            <span class="counter">{data.projectCounter}</span>
          </h2>
          <p>{data.projectBio}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;

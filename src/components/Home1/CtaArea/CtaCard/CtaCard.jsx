import React from "react";

const CtaCard = ({ ctaData }) => {
  return (
    <div class={ctaData.cName}>
      <div class="cta-item item-two d-flex align-items-center">
        <div class="info">
          {ctaData.ctaPost && <span>{ctaData.ctaPost}</span>}
          <h3 class={ctaData.titleCName}>{ctaData.ctaTitle}</h3>
        </div>
        <div class="button">
          <a href="#detail" class={ctaData.ctaBtnCName}>
            {ctaData.ctaBtn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;

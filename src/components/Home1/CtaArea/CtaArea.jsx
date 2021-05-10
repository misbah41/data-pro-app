import React from "react";
import CtaCard from "./CtaCard/CtaCard";
import { ctaData } from "./CtaData";

const CtaArea = () => {
  return (
    <div class="cta-area">
      <div class="container">
        <div class="row no-gutters">
          {ctaData.map((data) => (
            <CtaCard ctaData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CtaArea;

import React from "react";
// import '../../../Share/style.css'
const ServicessCard = ({ serviceData }) => {
  return (
    <div class="single-service-item mb-30 wow fadeInUp">
      <div class="icon">
        <img src={serviceData.serviceIcon} alt="service-icon" />
      </div>
      <div class="service-text">
        <h5>{serviceData.serviceTitle}</h5>
        <p>{serviceData.servicePost}</p>
      </div>
    </div>
  );
};

export default ServicessCard;

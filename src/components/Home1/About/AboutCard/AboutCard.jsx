import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCard = ({ aboutData }) => {
  return (
    <ul class="about-list-item">
      <li class="list-item d-flex wow fadeInUp">
        <div class="check-box">
          <FontAwesomeIcon icon={aboutData.aboutIcon} />
        </div>
        <div class="list-content">
          <h5>{aboutData.postTile}</h5>
          <p>{aboutData.aboutPost}</p>
        </div>
      </li>
    </ul>
  );
};

export default AboutCard;

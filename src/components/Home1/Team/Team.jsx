import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";
import { teamCardData } from "./TeamCardData";
const Team = () => {
  return (
    <section class="team-members pt-110 pb-80 bg_cover" id="team">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title section-title-white text-center mb-70">
              <span class="span">Meet Our Team</span>
              <h2>Our Creative Team</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {teamCardData.map((memberData) => (
            <TeamCard memberData={memberData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

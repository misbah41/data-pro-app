import React from "react";

const TeamCard = ({ memberData }) => {
  return (
    <div class="col-lg-3 col-md-6">
      <div class="single-team-member mb-40 wow fadeInUp">
        <div class="team-img">
          <img src={memberData.memberImg} alt="" />
        </div>
        <div class="member-info">
          <h5>{memberData.memberName}</h5>
          <p>{memberData.surName}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

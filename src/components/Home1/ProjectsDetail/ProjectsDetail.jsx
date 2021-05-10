import React from "react";
import AwardCard from "./AwardCard/AwardCard";
import { projectData } from "./ProjectsDetailData";

const ProjectsDetail = () => {
  return (
    <section class="counter-area" style={{marginTop:'150px'}}>
      <div class="container">
        <div class="counter-wrapper">
          <div class="row">
            {projectData.map((data) => (
              <AwardCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetail;

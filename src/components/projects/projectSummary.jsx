import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted By {project.authorFirstName}&nbsp;{project.authorLastName}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toString()).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;

import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./projectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {!projects && <div>No available Project</div>}
      {projects.map((project) => (
        <Link key={project._id} to={`/project/${project._id}`}>
          <ProjectSummary key={project._id} project={project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;

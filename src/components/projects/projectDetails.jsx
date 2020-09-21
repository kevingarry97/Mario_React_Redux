import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { loadProjects } from "../../store/projects";

const ProjectDetails = ({ project }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <div className="container">
      {project.length !== 0 &&
        project.map((p) => (
          <div key={p._id}>
            <div className="section project-details">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">{p.title}</span>
                  <p>{p.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>
                    Posted by {p.authorFirstName} {p.authorLastName}
                  </div>
                  <div>2nd September, 2am</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {project.length === 0 && <div>No Project Available</div>}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  let id = ownProps.match.params.id;
  const projects = state.entities.projects.list;
  const item = projects.filter((project) => project._id === id);
  return {
    project: item,
  };
};

export default connect(mapStateToProps, null)(ProjectDetails);

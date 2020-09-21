import React, { Component } from "react";
import Notifications from "./notifications";
import ProjectList from "./../projects/projectList";
import { connect } from "react-redux";
import { loadProjects } from "../../store/projects";
import { getProjects } from "../../store/projects";

class DashBoard extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: getProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

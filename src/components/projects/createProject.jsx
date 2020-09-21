import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { addProject } from "../../store/projects";

class CreateProject extends Form {
  state = {
    account: { title: "", content: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    content: Joi.string().required().label("Content"),
  };

  doSubmit = () => {
    this.props.createProject(this.state.account);
    console.log(this.state.account);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          {this.renderInput("title", "title", "Title")}
          {this.renderTextArea("content", "Project Content")}
          {this.renderButton("btn btn-pink lighten-1 z-depth-0", "Create")}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createProject: (project) => dispatch(addProject(project)),
});

export default connect(null, mapDispatchToProps)(CreateProject);

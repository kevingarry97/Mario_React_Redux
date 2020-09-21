import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { registerUser } from "../../store/auths";

class SignOut extends Form {
  state = {
    account: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
  };

  doSubmit = () => {
    this.props.registerUser(this.state.account);
    setTimeout(() => {
      if (!this.props.error.msg.msg) window.location = "/signin";
    }, 300);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          {this.renderInput("email", "email", "Email", "email")}
          {this.renderInput("password", "password", "Password", "password")}
          {this.renderInput("firstName", "firstName", "First Name")}
          {this.renderInput("lastName", "lastName", "Last Name")}
          {this.renderButton("btn btn-pink lighten-1 z-depth-0", "Register")}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (user) => dispatch(registerUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { loginUser } from "../../store/auths";

class signIn extends Form {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    this.props.logUser(this.state.account);
    setTimeout(() => {
      if (!this.props.error.msg.msg) window.location = "/";
      else window.location = "/signin";
    }, 200);
  };

  render() {
    return (
      <div className="container">
        {this.props.error.msg.msg && <div>{this.props.error.msg.msg}</div>}
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          {this.renderInput("email", "email", "Email", "email")}
          {this.renderInput("password", "password", "Password", "password")}
          {this.renderButton("btn btn-pink lighten-1 z-depth-0", "Login")}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  logUser: (user) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signIn);

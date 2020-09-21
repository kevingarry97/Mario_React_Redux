/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutSuccess } from "../../store/auths";

class logOut extends Component {
  componentDidMount() {
    this.props.logOut();

    window.location = "/signin";
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logoutSuccess()),
});
export default connect(null, mapDispatchToProps)(logOut);

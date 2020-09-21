import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = ({ user }) => {
  return (
    <ul className="right">
      {!user && (
        <React.Fragment>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <li>
            <NavLink to="/create">New Project</NavLink>
          </li>
          <li>
            <NavLink to="/profile">{user.firstName}</NavLink>
          </li>
          <li>
            <NavLink to="/logout">LogOut</NavLink>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
};

export default SignedOutLink;

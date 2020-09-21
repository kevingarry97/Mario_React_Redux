import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = ({ user }) => {
  const initial = user?.firstName.charAt(0).concat(user.lastName.charAt(0));
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
            <NavLink to="/logout">LogOut</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="btn btn-floating pink lighten-1">
              {initial}
            </NavLink>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
};

export default SignedOutLink;

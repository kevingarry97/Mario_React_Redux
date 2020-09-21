import React from "react";
import { Link } from "react-router-dom";
import SignedOutLink from "./signedOutLink";

const NavBar = ({ user }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedOutLink user={user} />
      </div>
    </nav>
  );
};

export default NavBar;

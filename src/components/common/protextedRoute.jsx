import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

function ProtectedRoute({ component: Component, render, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (!auth.getCurrentUser()) return <Redirect to="/signin" />;
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    </div>
  );
}

export default ProtectedRoute;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import signIn from "./components/auth/signIn";
import SignOut from "./components/auth/signOut";
import DashBoard from "./components/dashboard/dashboard";
import NavBar from "./components/layout/navbar";
import CreateProject from "./components/projects/createProject";
import ProjectDetails from "./components/projects/projectDetails";
import logOut from "./components/layout/logOut";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protextedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <NavBar user={user} />
        <Switch>
          <ProtectedRoute path="/project/:id" component={ProjectDetails} />
          <ProtectedRoute path="/create" component={CreateProject} />
          <Route path="/signin" component={signIn} />
          <Route path="/logout" component={logOut} />
          <Route path="/signup" component={SignOut} />
          <ProtectedRoute path="/" exact component={DashBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Routes from "./routes";

export default class routerView extends Component {
  static defaultProps = {
    Routes
  };
  render() {
    let { Routes } = this.props;
    let RedirectArr = Routes.filter(item => item.redirect).map(
      (item, index) => (
        <Redirect from={item.path} to={item.redirect} key={index} />
      )
    );
    return (
      <Switch>
        {Routes.filter(item => item.component).map((item, index) => (
          <Route
            path={item.path}
            render={props => (
              <item.component {...props} Routes={item.children} />
            )}
            key={index}
          />
        ))}
        {RedirectArr}
      </Switch>
    );
  }
}

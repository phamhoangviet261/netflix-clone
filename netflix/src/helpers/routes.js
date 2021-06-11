import React from "react";
import { Rpute, Redirect, Route } from "react-router-dom";
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) return children;
        if (user)
          return (
            <Redirect
              to="{{
            pathName: loggedInPath
        }}"
            ></Redirect>
          );
        return null;
      }}
    ></Route>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

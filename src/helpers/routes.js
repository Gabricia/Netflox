import React from "react";
import { Route, Redirect } from "react-router-dom";

//if the user is logged in and connect to the signin or signup page
//redirect him directly to the browse page
// else if he isn't, render the signin or signup page
export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};


//if the user is logged in, render the page (browse in our case)
//else redirect to signin page
export const ProtectedRoute = ({ user, children, ...rest }) => {
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
};

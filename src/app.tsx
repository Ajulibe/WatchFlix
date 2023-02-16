import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

/*eslint-disable*/
import DetailsPage from "pages/details";
import LoginWidget from "auth/LoginWidget";
import MoviesPage from "pages/movies";
import React from "react";
import { oktaConfig } from "lib/okta-config";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    history.push("/auth");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/movies" />
            </Route>
            <Route path="/auth" render={() => <LoginWidget config={oktaConfig} />} />
            <SecureRoute path="/movies">
              <MoviesPage />
            </SecureRoute>
            <SecureRoute path="/movies/:movieId">
              <DetailsPage />
            </SecureRoute>
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </div>
      </Security>
    </div>
  );
};

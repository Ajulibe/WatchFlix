/* eslint-disable */
import OktaSignInWidget from "./OktaSignInWidget";
import { Route } from "react-router-dom";
import { Spinner } from "components/spinner";
import { useOktaAuth } from "@okta/okta-react";

const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("Sign-in error", err);
  };

  if (!authState) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return authState.isAuthenticated ? (
    <Route path="/" element={<Navigate replace to="/" />} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;

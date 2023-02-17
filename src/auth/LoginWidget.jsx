/*eslint-disable*/
import Cookies from "js-cookie";
import OktaSignInWidget from "./OktaSignInWidget";
import { Redirect } from "react-router-dom";
import { Spinner } from "components/spinner";
import appConfig from "config";
import axios from "axios";
import { saveUserInfo } from "api";
import { useOktaAuth } from "@okta/okta-react";

// eslint-disable-next-line react/prop-types
const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens) => {
    const accessToken: string = tokens.accessToken.accessToken;
    Cookies.set(appConfig.REACT_APP_TOKEN, JSON.stringify(accessToken), {
      secure: process.env.NODE_ENV !== "development"
    });

    // get user information after login
    axios
      .get(tokens.accessToken.userinfoUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        const userDetails = res.data;
        saveUserInfo(userDetails);
      });

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
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;

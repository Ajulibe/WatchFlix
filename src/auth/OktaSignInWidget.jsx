/* eslint-disable react/prop-types */
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

import { useEffect, useRef } from "react";

import OktaSignIn from "@okta/okta-signin-widget";
import { PagesWrapper } from "layout";
import { WidgetWrapper } from "./style";
import { oktaConfig } from "lib/okta-config";

const OktaSignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef();

  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const widget = new OktaSignIn(oktaConfig);

    widget
      .showSignInToGetTokens({
        el: widgetRef.current
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return (
    <PagesWrapper>
      <WidgetWrapper>
        <div ref={widgetRef}></div>
      </WidgetWrapper>
    </PagesWrapper>
  );
};

export default OktaSignInWidget;

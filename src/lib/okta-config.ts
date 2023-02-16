import config from "config";

export const oktaConfig = {
  clientId: config.REACT_APP_OKTA_CLIENT_ID,
  issuer: config.REACT_APP_OKTA_ISSUER,
  redirectUri: config.REACT_APP_OKTA_REDIRECT_URI,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
  features: {
    registration: true
  },
  logo: "https://ucarecdn.com/d2052411-1087-473c-be32-66c01c638452/Screenshot20230216at072250.png"
};

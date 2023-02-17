type Keys =
  | "API_KEY"
  | "API_BASE_URL"
  | "IMAGE_BASE_URL"
  | "REDUCED_IMAGE_BASE_URL"
  | "REACT_APP_OKTA_CLIENT_ID"
  | "REACT_APP_OKTA_ISSUER"
  | "REACT_APP_OKTA_REDIRECT_URI"
  | "REACT_APP_TOKEN"
  | "REACT_APP_JAVA_SERVER_BASE_URL"
  | "REACT_APP_EXPRESS_SERVER_BASE_URL";

const config: Record<Keys, string | undefined> = {
  API_KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  API_BASE_URL: process.env.REACT_APP_API_DOMAIN,
  IMAGE_BASE_URL: process.env.REACT_APP_API_BASE_IMAGE_URL,
  REDUCED_IMAGE_BASE_URL: process.env.REACT_APP_API_BASE_IMAGE_URL_REDUCED,
  REACT_APP_OKTA_CLIENT_ID: process.env.REACT_APP_OKTA_CLIENT_ID,
  REACT_APP_OKTA_ISSUER: process.env.REACT_APP_OKTA_ISSUER,
  REACT_APP_OKTA_REDIRECT_URI: process.env.REACT_APP_OKTA_REDIRECT_URI,
  REACT_APP_TOKEN: process.env.REACT_APP_TOKEN,
  REACT_APP_JAVA_SERVER_BASE_URL: process.env.REACT_APP_JAVA_SERVER_BASE_URL,
  REACT_APP_EXPRESS_SERVER_BASE_URL: process.env.REACT_APP_EXPRESS_SERVER_BASE_URL
};

export default config;

type Keys = "API_KEY" | "API_BASE_URL" | "IMAGE_BASE_URL";

const config: Record<Keys, string | undefined> = {
  API_KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  API_BASE_URL: process.env.REACT_APP_API_DOMAIN,
  IMAGE_BASE_URL: process.env.REACT_APP_API_BASE_IMAGE_URL
};

export default config;

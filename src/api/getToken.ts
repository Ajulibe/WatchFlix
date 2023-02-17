import Cookies from "js-cookie";
import config from "config";

function getValueFromCookie(value: string): string | null {
  let result: string = "";
  const cookieResponse = Cookies.get(value);

  // to be configured when cookie is set

  if (cookieResponse) {
    result = cookieResponse;
    result = JSON.parse(result);

    return result;
  }

  return result;
}

/**
 *
 * @returns Access token
 */
function getToken(): string | null {
  if (!config.REACT_APP_TOKEN) throw new Error("REACT_APP_TOKEN is not defined in .env file");
  return getValueFromCookie(config.REACT_APP_TOKEN);
}

export { getToken };

import axios from "axios";
import config from "config";

export async function getMovies(
  emissionType: string,
  searchTerm: string = "christmas"
): Promise<unknown> {
  let response;
  try {
    // get recent movie lists if there is no search term
    if (!searchTerm) {
      response = await axios.get(
        `${config.API_BASE_URL}/trending/${emissionType}/week?api_key=${config.API_KEY}`
      );
    } else {
      response = await axios.get(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${config.API_BASE_URL}/search/${emissionType}?api_key=${config.API_KEY}&language=en-US&query=${searchTerm}&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
      );
    }
  } catch (error) {
    response = error;
  }
  return response;
}

export async function getCast(emissionType: string, movieId: number): Promise<unknown> {
  let response;
  try {
    response = await axios.get(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${config.API_BASE_URL}/${emissionType}/${movieId}/credits?api_key=${config.API_KEY}&language=en-US`
    );
  } catch (error) {
    response = error;
  }
  return response;
}

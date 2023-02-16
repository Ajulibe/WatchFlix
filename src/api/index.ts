import axios from "axios";
import config from "config";

export async function getRecommendedMovies(): Promise<unknown> {
  let response;
  try {
    response = await axios.get(
      `${config.API_BASE_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&query=house&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false`
    );
  } catch (error) {
    response = error;
  }
  return response;
}

export async function getRecentMovies(): Promise<unknown> {
  let response;
  try {
    response = await axios.get(
      `${config.API_BASE_URL}/trending/movie/week?api_key=${config.API_KEY}`
    );
  } catch (error) {
    response = error;
  }
  return response;
}

export async function getCast(emissionType: string, movieId: number): Promise<unknown> {
  let response;
  try {
    response = await axios.get(
      `${config.API_BASE_URL}/${emissionType}/${movieId}/credits?api_key=${config.API_KEY}&language=en-US`
    );
  } catch (error) {
    response = error;
  }
  return response;
}

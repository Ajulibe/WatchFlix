import axios from "axios";
import config from "config";

class Request {
  //  Fetch Movies from api
  public async getMovies(searchTerm: string): Promise<unknown> {
    let response;
    try {
      response = await axios.get(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${config.API_BASE_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      );
    } catch (error) {
      response = error;
    }
    return response;
  }

  // Fetch Recent Movies from api
  public async getRecentMovies(): Promise<unknown> {
    let response;
    try {
      response = await axios.get(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${config.API_BASE_URL}/trending/movie/week?api_key=${config.API_KEY}`
      );
    } catch (error) {
      response = error;
    }
    return response;
  }
}

export const Api: Request = new Request();

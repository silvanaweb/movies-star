let API_KEY = "";
let REACT_APP_API_URL = "";

const api = {
  config() {
    API_KEY = process.env.REACT_APP_API_KEY;
    REACT_APP_API_URL = process.env.REACT_APP_API_URL;
  },

  async getMovies() {
    let response = await fetch(
      `${REACT_APP_API_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    const data = await response.json();
    const { results } = data;
    if (results && !!results.length) {
      return results;
    } else {
      const { status_message } = data;
      throw new Error(`[Fetch MOvies] ${status_message}`);
    }
  },
  async getGenres() {
    let response = await fetch(
      `${REACT_APP_API_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    const data = await response.json();
    const { genres } = data;
    if (genres && !!genres.length) {
      return genres;
    } else {
      const { status_message } = data;
      throw new Error(`[Fetch Genres] ${status_message}`);
    }
  }
};

export { api };

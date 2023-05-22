import { moviesApi, moviesHost, moviesKey } from "../config/config"
import request from "../utils/request"

const getMovie = async (movieName: string) => {

    const response = await request(`${moviesApi}/${movieName}`, {
        method: 'GET',
        url: ``,
        params: {
          exact: 'true',
          titleType: 'movie'
        },
        headers: {
          'X-RapidAPI-Key': moviesKey,
          'X-RapidAPI-Host': moviesHost
        }
    });
    console.log(response);
    return response;
}

export {
    getMovie
}
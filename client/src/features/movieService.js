import axios from 'axios'
import {base_url} from "../utils/base_url";

 const getAllMovies = async() => {
    const response = await axios.get(`${base_url}getAllMovies`)
    return response.data
}

const getAMovie = async(id) => {
    const response = await axios.get(`${base_url}getMovieById?_id=${id}`, id)
    return response.data
}

const movieService = {
    getAllMovies,
    getAMovie,
};

export default movieService;

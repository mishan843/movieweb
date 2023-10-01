import axios from 'axios'

export const getAllMovies = async() => {
    const response = await axios.get('https://one23movies-wu30.onrender.com/getAllMovies')
    console.log(response);
}

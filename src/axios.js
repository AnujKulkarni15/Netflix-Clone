import axios from "axios";

// Base URL is to make request to the movies database

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
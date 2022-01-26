import React from "react";
import axios from "axios";


const API = "https://api.themoviedb.org/3/search/movie"
const Api_key = "b114d47faa5fc6c84f297f2d67783464"


const GetMoviesApi = async(name = 'a') => {

    const data = await axios.get(API+"?api_key="+Api_key+"&query="+name)
    return data
  
};

export default GetMoviesApi;

//https://api.themoviedb.org/3/search/movie?api_key=b114d47faa5fc6c84f297f2d67783464&query=a
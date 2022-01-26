import React ,{ useState, useEffect}from "react";
import Title from "../components/title";
import Body from "../components/body";
import Navbar from "../components/navbar";

import "../styles/styles.css"
import GetMoviesApi from "../api/getMoviesApi";



const MoviesMarket = () => {

    const [data, setData] = useState([])
    console.log("🚀 ~ file: index.js ~ line 16 ~ MoviesMarket ~ data", data)

    useEffect(() =>{
        getData()
    },[])

    const getData = async() => {
         const result = await GetMoviesApi()
         console.log("🚀 ~ file: index.js ~ line 25 ~ getData ~ result", result)
         setData(result.data.results)
    }

    const onSearch = async (name) => {
    console.log("🚀 ~ file: index.js ~ line 30 ~ onSearch ~ name", name)
        const result = await GetMoviesApi(name)
        setData(result.data.results)
    }

    return ( 
       <>
        <Navbar/>
        <Title onSearch={onSearch}/>
        <Body dataList={data} />


       </>

    )


};

export default MoviesMarket;
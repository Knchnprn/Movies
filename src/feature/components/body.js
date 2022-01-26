import React from "react";

const Body = (props) => {

    const {dataList} = props

    return(
        <>
        <div className="container body ">

            <div className=" body-header-text text-center text-bold">Movies</div>
        <div className="text-center">
             {dataList.map(item => {
                    return (
                        <>

                    <label className="p-2 label-movie movie-text">
                     {/* <img width={350} height={500} src={"https://image.tmdb.org/t/p/w185"+item.poster_path}  alt="..."></img> */}
                     <img className="pb-3" width={350} height={500} src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="..."></img>
                     <div>Title : {item.original_title} </div>
                    <div>Language : {item.original_language} </div>
                    <div>Release Date : {item.release_date} </div>
                    
                   </label> 
                        
                        </>
                    )
                })}
        </div>
               
      
        </div> 
        </>
    )

};

export default Body;
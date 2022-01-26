import React from "react";

const Title = (props) => {

    const { onSearch } = props
    
    const onSubmit = () => {

        let value = document.getElementById('movieName').value

        onSearch(value)
        document.getElementById('movieName').value = ''
    }

    return(
        <>
        
        <div className="title ">
            <div className="title-text text-center">What movie do you want to watch ?</div>
            <div className="row g-3 justify-content-center">
            
            
            {/* <form onSubmit={()=>{onSubmit()}}> */}
            <div className="col-6 ">
                <input className="form-control form-control-lg" id="movieName" type="text" placeholder="Please enter movie name " aria-label="default input example"></input>
            </div>
            <div className="col-auto">
               <button type="submit" className="btn btn-info btn-lg" onClick={()=> {onSubmit()}}>Search</button> 
            </div>
        
            {/* </form> */}

            </div>
            
        </div>
        

        
        </>
    )

};

export default Title;
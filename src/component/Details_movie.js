import React from 'react'

function DetailsM(props) {
    
   console.log(props)
   const Movie = props.movies.find( el => el.id === props.match.params.id*1)
   
   
   
   
   
   
    return (
        <div style={{marginBottom:'20px'}}>
          
          <h1 style={{marginTop:'60px'}}>{Movie.name}</h1>
          <div style={{display:'flex' , justifyContent:'space-evenly',marginTop:'50px',border:'1px solid black' ,width:'1100px',marginLeft:'200px',backgroundColor:'black'}}>
          <img src={Movie.image} style={{width:"400px"}}/>
            <video style={{width:'650px',height:'550px'}}  controls>
            <source src={Movie.trailer} type="video/mp4"/>
            </video>
       
            </div>
        </div>
    )
}

export default DetailsM;

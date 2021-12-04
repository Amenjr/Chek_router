import React from 'react'

function DetailsS(props) {
    
   console.log(props)
   const Serie = props.Series.find( el => el.id === props.match.params.id*1)
   
   
   
   
   
   
    return (
        <div style={{marginBottom:'20px'}}>
          
          <h1 style={{marginTop:'60px'}}>{Serie.name}</h1>
          <div style={{display:'flex' , justifyContent:'space-evenly',marginTop:'50px',border:'1px solid black' ,width:'1100px',marginLeft:'200px',backgroundColor:'black'}}>
          <img src={Serie.image} style={{width:"400px"}}/>
            <video style={{width:'650px',height:'550px'}}  controls>
            <source src={Serie.trailer} type="video/mp4"/>
            </video>
       
            </div>
        </div>
    )
}

export default DetailsS;

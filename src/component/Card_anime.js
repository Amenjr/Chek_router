import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import React from "react";
import {Link} from 'react-router-dom';
function CarA({anime,Animes,setAnimes}){
    const dell =(id)=>{
        setAnimes(Animes.filter(anime => anime.id !==id));
 
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={anime.image} />
        <Card.Body>
        <Card.Title>{anime.name}</Card.Title>
        
        <Button variant="primary" onClick={()=>dell(anime.id)}>delete</Button>
        <Link to={`/detailsA/${anime.id}`} ><Button variant="primary" style={{marginLeft:'10px'}}>detailes</Button></Link>

        <ReactStars count={10} value={anime.rate} size={16} activeColor="#ffd700"/>
        </Card.Body>
        </Card>
    );
}
export default CarA;
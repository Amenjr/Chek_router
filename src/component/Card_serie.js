import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import React from "react";
import {Link} from 'react-router-dom';

function CarS({el,Series,setSeries}){
    const delet =(id)=>{
        setSeries(Series.filter(el=> el.id !==id))
 
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        
        <Button variant="primary" onClick={()=>delet(el.id)}>delete</Button>
        <Link to={`/detailsS/${el.id}`} ><Button variant="primary" style={{marginLeft:'10px'}}>detailes</Button></Link>
        <ReactStars count={10} value={el.rate} size={16} activeColor="#ffd700"/>
        </Card.Body>
        </Card>
    );
}
export default CarS;
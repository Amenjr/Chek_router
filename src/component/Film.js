
import 'bootstrap/dist/css/bootstrap.min.css';

import "./watch.css";


import CarF from './Card_film.js';
function Film({search,searchRate,movies,setMovies}){
 
    return(
      
     
            <div className="type">
              
                {
                movies.filter((el,key) => el.name.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=searchRate).map((el,key)=><div className="type2"><CarF el={el} key={el.id}  movies={movies}  setMovies={setMovies} searchRate={searchRate}/></div>)
                }
            </div>
           
     
    );
}
export default Film;
import { useState } from 'react';
import batman from './film/batman.png';
import forest from './film/forest.jpg';
import inter from './film/inter.jpg';
import joker from './film/joker.jpg';
import shawshank from './film/shawshank.jpg';
import ring from './film/the ring.jpg';
import silence from './film/the silence.jpg';
import batman_tr from './film/The Dark Knight (2008) Official Trailer #1 - Christopher Nolan Movie HD.mp4';
import forest_tr from './film/Forrest Gump - Trailer.mp4';
import inter_tr from './film/Interstellar Official Trailer #2 (2014) - Matthew McConaughey, Christopher Nolan Sci-Fi Movie HD.mp4';
import joker_tr from './film/JOKER - Final Trailer - Now Playing In Theaters.mp4';
import shawshank_tr from './film/The Shawshank Redemption (1994) Official Trailer #1 - Morgan Freeman Movie HD.mp4';
import ring_tr from './film/Rings _ Trailer #1 _ Paramount Pictures International.mp4';
import silence_tr from './film/the Silence of the Lambs Blu-Ray Trailer - 2013 [HD].mp4';
import one from './anime/one piece.jpg';
import Kimetsu from './anime/kimetsu.jpg';
import death from './anime/death note.jpg';
import jujutsu from './anime/jujutsu-kaisen-OL10.jpg';
import Attack from './anime/attack.jpg';
import promised from './anime/the promised.jpg';
import one_tr from './anime/If One Piece had a trailer....mp4';
import Kimetsu_tr from './anime/Demon Slayer - Kimetsu no Yaiba _ OFFICIAL TRAILER.mp4';
import death_tr from './anime/Death Note Trailer - (Infinity War Style).mp4';
import jujutsu_tr from './anime/Jujutsu Kaisen 0 Movie - Official Trailer.mp4';
import Attack_tr from './anime/Attack On Titan Season 1 Trailer - English Dubbed.mp4';
import promised_tr from './anime/[MAD] The Promised Neverland _ Trailer VOSTFR.mp4';
import Navv from './component/Navbar.js';
import Film from './component/Film.js';
import Serie from './component/Serie.js';
import Anime from './component/Anime.js';
import Home from './component/Home.js';
import got from './serie/got.jpg';
import bd from './serie/bd.jpg';
import pk from './serie/pk.jpg';
import pb from './serie/pb.jpg';
import robot from './serie/Mr_Robot.jpg';
import banshee from './serie/banshee.jpg';
import got_tr from './serie/yt1s.com - Game of Thrones  Official Series Trailer HBO_480p.mp4';
import bd_tr from './serie/yt1s.com - BREAKING BAD season 15 trailer_480p.mp4';
import pk_tr from './serie/Peaky Blinders - Season 1 _ Trailer.mp4';
import pb_tr from './serie/Prison Break - Season 1 Trailer.mp4';
import robot_tr from './serie/Mr. Robot Season 1 - Trailer.mp4';
import banshee_tr from './serie/yt1s.com - BANSHEE  Season 1  Full TRAILER  HD_480p.mp4';
import './App.css';
import { Route } from 'react-router';

import DetailsS from './component/Details_serie';
import DetailsM from './component/Details_movie';
import DetailsA from './component/Details_anime';

function App() {
 

 const [movies,setMovies]=useState([{id:0,name:'Batman the dark night',image:batman,rate:'9',trailer:batman_tr},
  {id:1,name:'Forest gump',image:forest,rate:'8',trailer:forest_tr},
  {id:3,name:'Joker',image:joker,rate:'8',trailer:joker_tr},
  {id:2,name:'Interstellar',image:inter,rate:'8',trailer:inter_tr},
  {id:4,name:'The Shawshank redmption',image:shawshank,rate:'10',trailer:shawshank_tr},
  {id:5,name:'The Ring',image:ring,rate:'7',trailer:ring_tr},
  {id:6,name:'The Silence of The Lambs',image:silence,rate:'9',trailer:silence_tr}])

  const [Animes,setAnimes]=useState([{id:0,name:'One Piece',image:one,rate:'9',trailer:one_tr},
  {id:1,name:'Kimetsu no yaiba',image:Kimetsu,rate:'8',trailer:Kimetsu_tr},
    {id:2,name:'Death Note',image:death,rate:'10',trailer:death_tr},
    {id:3,name:'jujutsu-kaisen',image:jujutsu,rate:'8',trailer:jujutsu_tr},
    {id:4,name:'Attack On Titan',image:Attack,rate:'9',trailer:Attack_tr},
    {id:5,name:'The Promised Neverland',image:promised,rate:'7',trailer:promised_tr}]);

  const [Series,setSeries] = useState ([{id:0,name:'Game of Thrones',image:got,rate:'10',trailer:got_tr},
  {id:1,name:'breaking bad',image:bd,rate:'10',trailer:bd_tr},
    {id:2,name:'Peaky Blindres',image:pk,rate:'8',trailer:pk_tr},
    {id:3,name:'Prison Break',image:pb,rate:'9',trailer:pb_tr},
    {id:4,name:'Mr Robot',image:robot,rate:'8',trailer:robot_tr},
    {id:5,name:'Banshee',image:banshee,rate:'7',trailer:banshee_tr}]);
    
  
 
  

  const [search,setSearch] = useState("");
  const [searchRate,setSearchrate]=useState("");
  return (
    <div className="App">
      <Navv  search={search} setSearch={setSearch} setSearchrate={setSearchrate} searchRate={searchRate} setMovies={setMovies} movies={movies} Animes={Animes} setAnimes={setAnimes} Series={Series} setSeries={setSeries}></Navv>
      <Route exact path='/'><Home/></Route>
      <Route path='/Film'><Film   search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} movies={movies} setMovies={setMovies}/> </Route>
      <Route path='/Serie'> <Serie  search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} Series={Series} setSeries={setSeries}/> </Route>
      <Route path='/Anime'><Anime  search={search}  setSearch={setSearch} searchRate={searchRate} setSearchrate={setSearchrate} Animes={Animes} setAnimes={setAnimes}/> </Route>
      <Route path='/detailsS/:id' render = {(props)=> <DetailsS Series={Series} {...props} />}></Route>
      <Route path='/detailsM/:id' render = {(props)=> <DetailsM movies={movies} {...props} />}></Route>
      <Route path='/detailsA/:id' render = {(props)=> <DetailsA Animes={Animes} {...props} />}></Route>
    </div>
  );
}

export default App;

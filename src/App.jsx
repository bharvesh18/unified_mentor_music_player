import { useState } from 'react'
import Player from './components/Player'
import song1 from './song1.mp4'
import song2 from './song2.mp4'
import Playlist from './components/Playlist'
import song1img from './song1img.jpeg'
import song2img from './songimg2.jpeg'
import song3 from './song3.mp4'
import song3img from './songimg3.jpeg' 
import song4 from './song4.mp4'
import songimg4 from './songimg4.jpeg'
import song5 from './song5.mp4'
import songimg5 from './song5img.jpeg'
function App() {
  const [songs,setSongs]=useState([{
    'artist':'Bharvesh Dabas',
    'src':song1,
    'imgsrc':song1img,
    'playing':false,
    'songname':'Shiv-Shakti Title Song'
  },{
    'artist':'artist 2',
    'src':song2,
    'imgsrc':song2img,
    'playing':false,
    'songname':'Hangover'
  },{
    'artist':'artist 3',
    'src':song3,
    'imgsrc':song3img,
    'playing':false,
    'songname':'Sans'
  },{
    'artist':'artist 4',
    'src':song4,
    'imgsrc':songimg4,
    'playing':false,
    'songname':'Bheegi si Bhaagi si'
  },{
    'artist':'artist 5',
    'src':song5,
    'imgsrc':songimg5,
    'playing':false,
    'songname':'Mere Bina'
  }])
  const [curr,setCurr]=useState(0);
  const handleNext=()=>{
    setCurr((curr+1)%songs.length);
  }
  const handlePrev=()=>{
    setCurr(((curr-1)+songs.length)%songs.length);
  }
  return (
    <>
      <Player currsong={songs[curr]} next={handleNext} prev={handlePrev} songList={songs} setSongs={setSongs}/>
      <Playlist songlist={songs} currsong={songs[curr]} setCurr={setCurr} currindex={curr}/>
    </>
  )
}

export default App

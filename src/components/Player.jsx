import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { LiaRandomSolid } from "react-icons/lia";
import { CiRepeat } from "react-icons/ci";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";;
const Player = ({currsong,next,prev,songList,setSongs}) => {
  const [isPLaying,setPlaying]=useState(false);
  const [progressVal,setProgVal]=useState(0);
  const refSsong=useRef(null);
  const [playIcon,setPlayIcon]=useState(<IoIosPlayCircle/>)
  const [loop,setLoop]=useState(false);
  const [nloop,setNLoop]=useState(0);
  useEffect(()=>{
    console.log(currsong.playing)
},[currsong.playing])
  useEffect(()=>{
    if(isPLaying){
      refSsong.current.play();
      setPlayIcon(<FaPauseCircle/>);
    }
    else{
      refSsong.current.pause();
      setPlayIcon(<IoIosPlayCircle/>)
    }
  },[isPLaying,currsong,nloop])
  const handleRandom=()=>{

  }
  const playPrevious=()=>{
    prev();
  }
  const handlePlay=()=>{
    setPlaying(!isPLaying);
    currsong.playing=!currsong.playing;
  }
  const playNext=()=>{
    next();
  }
  const updateProgress=()=>{
    let currtime=refSsong.current.currentTime;
    let dur=refSsong.current.duration;
    if(currtime==dur){
      if(loop==true){
        currtime=refSsong.current.currentTime=0;
        setNLoop(nloop+1);
      }
      else{
        setProgVal(0);
        next();
      }
    }
    setProgVal((currtime/dur)*100);
  }
  const handleProgress=(e)=>{
    let val=e.target.value;
    refSsong.current.currentTime=(val/100)*refSsong.current.duration;  
    setProgVal(val);
  }
  const playOnRepeat=(e)=>{
    if(loop){
      e.target.style.background="none";
      e.target.style.color="black";
      setLoop(false);
      setNLoop(0);
    }
    else{
      e.target.style.background="black";
      e.target.style.color="white";
      setLoop(true);
    }
  }
  const randomPlaylist=()=>{
    const shuffledPlayList=[...songList];
    for(let i=shuffledPlayList.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [shuffledPlayList[i],shuffledPlayList[j]]=[shuffledPlayList[j],shuffledPlayList[i]];
    }
    setSongs(shuffledPlayList);
  }
  return (
    <div>
      <div className="main">
        <div className="player-section">
          <div className="control">
            <div className="progress-bar">
                <input type="range" className="progress" value={progressVal} onChange={handleProgress} style={{
                  background: `linear-gradient(to right, black ${progressVal}%, #d3d3d3 ${progressVal}%)`
                }}/>
            </div>
          </div>
        <audio ref={refSsong} src={currsong.src} onTimeUpdate={updateProgress}></audio>
          <div className="control-opt">
                <LiaRandomSolid onClick={randomPlaylist}/>
                <MdSkipPrevious onClick={playPrevious} onTouchStart={playPrevious}/>
                <span onClick={handlePlay} onTouchStart={handlePlay}>{playIcon}</span>
                <MdSkipNext onClick={playNext} onTouchStart={playNext}/>
                <CiRepeat onClick={playOnRepeat}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Player

import React from 'react'
import { useEffect } from 'react'
const Playlist = ({songlist,currsong,setCurr,currindex}) => {
  return (
    <div>
    <div className="play-list">
      {songlist.map((s,index)=>(
        <>
            <div className="song-card" style={{background: index===currindex ? 'black' :'linear-gradient(to right, #2e2e2e, #1e1e1e)'}}>
                <img src={s.imgsrc} alt="song"></img>
                <div className="song-detail" onClick={()=>{setCurr(index)}} onTouchEnd={()=>{setCurr(index)}}>
                    <b>Title : {s.songname} | Singer Name : {s.artist}</b>
                </div>
            </div>
        </>
      ))}
    </div>
    </div>
  )
}

export default Playlist

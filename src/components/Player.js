import React from "react";
import '../Player.css';
import { NavLink } from 'react-router-dom';
import {Shuffle, SkipBack, SkipForward, Repeat} from "react-feather";

import CoverArt from '../images/600x600bb.jpg';

const Play = ({}) => {
  return (
    <ion-icon name="play"></ion-icon>
  )
}
const Pause = ({onPlayerClick}) => {
  return (
    <ion-icon name="pause"></ion-icon>
  )
}


class Player extends React.Component {
  
  render () {
    return (
    <div className="player-container d-flex justify-content-between p-3">
          <div className="d-flex ">
            <div className="cover-art" aria-hidden="true">
              <img src={CoverArt} class="cover-art-image" alt="23523"/>
            </div>
            <ion-icon name="play"></ion-icon>
            <div 
            className="now_playing">
              <div 
              className="song-title">Marvins Room</div>
              <NavLink 
              smooth to={'/'}><p 
              className="song-artist">Drake</p></NavLink>
            
            </div>
            
          </div> 

          <div className="d-flex  justify-content-between align-items-center">
            <Shuffle className="m-3" size={23}></Shuffle>

            <SkipBack className="m-3" size={23}></SkipBack>

            <div className="rounded-circle playIcon m-3">
                <Play></Play>
             </div>

            <SkipForward className="m-3" size={23}></SkipForward>

            <Repeat className="m-3" size={23}></Repeat>

          </div>

          <div className="d-flex justify-content-end align-items-center">

          </div>
  
      </div>
    );
  }
}
export default Player;
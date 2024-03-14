import React from 'react'
import { Link } from "react-router-dom";

export default function Game() {
    const currTime = new Date();
  return (
    <nav className="navbar">
        <div className="nav-elements">
            <div className='left_ele'>
                <Link to="/"> X </Link>
                <h1> Roulette: $0.1 - $5000 </h1>
                {currTime.getHours()}:{currTime.getMinutes()}:{currTime.getSeconds()}
            </div>
            <div className='right_ele'>
                <Link to="/Game"> Lobby </Link>
                <Link to="/Game"> Chat </Link>
                <Link to="/Game"> History </Link>
                <Link to="/Game"> Setting </Link>
            </div>
      </div>
        <div className="Text-area">
             <input type="text" placeholder="Type a message here..."></input>
      </div>
    </nav>
  )
}

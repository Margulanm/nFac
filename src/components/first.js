import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const First = ({handleOne}) => {
    return (
        <div className="first">
        <h1 className="header"> Отбасы құр</h1>
       <img src="Group 172.jpg" alt="rings" className='image'/>
       <NavLink to="second"><button className="buttonOne" onClick={handleOne}> Үйлену </button></NavLink>
      </div>
    )
}
export default First;
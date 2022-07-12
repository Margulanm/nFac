import React from "react";
import '../App.css';

const First = ({handleOne}) => {
    return (
        <div className="first">
        <h1 className="header"> Отбасы құр</h1>
       <img src="Group 172.jpg" alt="rings" className='image'/>
       <button className="buttonOne" onClick={handleOne}> Үйлену </button>
      </div>
    )
}
export default First;
import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

const Third = ({handleThree}) => {
    return (
        <div className="first">
        <h1 className="header3"> СУРЕТКЕ ТҮС </h1>
        <h2 className="header2"> екінші адам </h2>
        <form>
  <label className="label1"> Атыңыз: </label>
  <input 
  className="input1"
  type = "text"
  required/>
    <label className="label1"> Тегіңіз: </label>
    <input 
    className="input1"
    type="text"
    required
    />
     <NavLink to="/fourth"><button className="button" onClick={handleThree}> Келесі</button></NavLink>
</form>
           </div>
    )
}

export default Third;
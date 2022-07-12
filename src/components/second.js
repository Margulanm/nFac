import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

const Second = ({handleTwo}) => {
    return (
           <div className="first">
        <h1 className="header3"> СУРЕТКЕ ТҮС </h1>
        <h2 className="header2"> бірінші адам </h2>
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
     <NavLink to="/third"><button className="button" onClick={handleTwo}> Келесі</button></NavLink>
</form>
           </div>
           
    )
    
}
export default Second;


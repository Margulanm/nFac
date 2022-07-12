import React from "react";
import '../App.css';

const Second = () => {
    return (
           <div className="first">
        <h1 className="header3"> СУРЕТКЕ ТҮС </h1>
        <h2 className="header2"> бірінші адам </h2>
        <form>
  <label> Атыңыз: </label>
  <input 
  type = "text"
  required/>
    <label> Тегіңіз: </label>
    <input 
    type="text"
    required
    />
    <button> Келесі</button>
</form>
           </div>
           
    )
    
}
export default Second;


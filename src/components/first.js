import React from "react";
import '../App.css';

const First = ({handleOne}) => {
    return (
        <div className="first">
        <h1 className="header"> Отбасы құр</h1>
       <img src="Group 172.jpg" alt="rings" className='image'/>
<<<<<<< HEAD
       <button className="buttonOne" onClick={()=>{handleOne();
       console.log('hjvzgxsjdhca');
    }}> Үйлену </button>
=======
       <div className="container">
            <button className="buttonOne"> Үйлену </button>
       </div>

>>>>>>> b267564702fc2499f930bd608718f60f08d53393
      </div>
    )
}
export default First;
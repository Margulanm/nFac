import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";

const handleOne = () => {
   
}
<<<<<<< HEAD
=======
const handleTwo = () => {

}
const handleThree = () => {

}
>>>>>>> temp-branch
const Tool = () => {
    return (
        <Routes>
            <Route path="" element={<First handleOne={handleOne}/>} />
<<<<<<< HEAD
            <Route path="second" element={<Second/>} />
            <Route path="third" element={<Third/>} />
=======
            <Route path="/second" element={<Second handleTwo={handleTwo}/>} />
            <Route path="/third" element={<Third handleThree={handleThree}/>} />
            <Route path="/fourth" element={<Fourth/>} />
>>>>>>> temp-branch
        </Routes>
    )
}

export default Tool
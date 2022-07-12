import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Third from "./third";

const handleOne = () => {
   
}
const handleTwo = () => {

}
const Tool = () => {
    return (
        <Routes>
            <Route path="" element={<First handleOne={handleOne}/>} />
            <Route path="/second" element={<Second handleTwo={handleTwo}/>} />
            <Route path="/third" element={<Third/>} />
        </Routes>
    )
}

export default Tool
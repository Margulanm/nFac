import React from "react";
import { Routes, Route } from "react-router-dom";
import First from "./first";
import Second from "./second";
const handleOne = () => {
   
}
const Tool = () => {
    return (
        <Routes>
            <Route path="" element={<First handleOne={handleOne}/>} />
            <Route path="second" element={<Second/>} />
        </Routes>
    )
}
export default Tool
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

/** Component for RoutesList
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> RoutesList
 */

function RoutesList() {
    return (
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    )
}

export default RoutesList;
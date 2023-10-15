import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPostsByTag from "./pages/BlogPostsByTag";
import Home from "./pages/Home";

/** Component for RoutesList
 * 
 * Props:
 * - projects
 * 
 * State:
 * - none
 * 
 * App -> RoutesList -> { About, Portfolio, Blog, BlogPost, Home }
 */

function RoutesList(projects) {
    return (
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio projects={projects} />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id/:permalink" element={<BlogPost />}></Route>
            <Route path="/blog/tags/:id/:tag" element={<BlogPostsByTag />}></Route>
            <Route path="/" element={<Home projects={projects} />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    )
}

export default RoutesList;
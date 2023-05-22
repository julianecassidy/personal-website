import * as React from "react"
import { BrowserRouter } from "react-router-dom";
import Nav from "../components/Nav";
import RoutesList from "../RoutesList";
import Footer from "./Footer";
import './App.css';

/**App for Website
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> { Nav, Routes }
 */

const App = () => {
  return (<div className="App">
    <BrowserRouter>
        <Nav />
        <RoutesList />
    </BrowserRouter>
    <Footer />
  </div>
  )}

export default App;
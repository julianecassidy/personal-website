import * as React from "react"
import Header from "../components/Header";
import About from "./About";

/** Component for Home
 *  Renders the navigation bar, header, homepage content, and the routes.
 * 
 * Props:
 * - None
 * 
 * State:
 * - None
 * 
 * App -> Home -> { Nav, Header, CONTENT..., Routes }
 */

const Home = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

export default Home;

export const Head = () => <title>Juliane Cassidy</title>;
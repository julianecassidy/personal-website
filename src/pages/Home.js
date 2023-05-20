import * as React from "react"
import Header from "../components/Header";

/** Component for Home
 *  Renders the navigation bar, header, homepage content, and the routes.
 * 
 * Props:
 * - None
 * 
 * State:
 * - None
 * 
 * App -> Home -> Header
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
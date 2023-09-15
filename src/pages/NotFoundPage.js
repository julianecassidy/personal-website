import { Link } from "react-router-dom";
import "./NotFoundPage.css";

/** Component for NotFoundPage
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * { Routes, BlogPost } -> NotFoundPage
 */

function NoutFoundPage() {

  return (
    <div className="NotFoundPage">
      <p>The page you are looking for doesn't exist.</p>
      <div className="NotFoundPage-button-div">
        <Link to="/home"><button>Go Home</button></Link>
      </div>
    </div>
  )

  
}

export default NoutFoundPage;

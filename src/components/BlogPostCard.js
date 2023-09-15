import { Link } from 'react-router-dom';
import "./BlogPostCard.css";

/** Component for BlogPostCard
 * 
 * Props:
 * - title of the post
 * - slug for the post
 * - content of the post
 * - date of publishing in UTC format
 * 
 * State:
 * - none
 * 
 * Blog -> BlogPostCard
 */

function BlogPostCard({ id, title, permalink, content, date }) {

    const contentSnippet = content.slice(0, 120);

    return (
        <div className="BlogPostCard">
        <Link to={`/blog/${id}/${permalink}`}>
            <div className="BlogPostCard-body">
                <h2>{title}</h2>
                <p>{contentSnippet}...</p>
                <div className="BlogPostCard-date">Published on: {date}</div>
            </div>
        </Link>
        </div>
    )

    
}

export default BlogPostCard;
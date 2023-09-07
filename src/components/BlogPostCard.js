import { Link } from 'react-router-dom';

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
        <Link className="BlogPostCard" to={`/blog/${id}/${permalink}`}>
            <div className="BlogPostCard-body">
                <h2>{title}</h2>
                <p>{contentSnippet}...</p>
                <p>Published on: {date}</p>
            </div>
        </Link>
    )

    
}

export default BlogPostCard;
import { Link } from 'react-router-dom';
import './TagList.css';

/** Component for TagList
 * 
 * Props:
 * - tags: [{id, name},...]
 * 
 * State:
 * - none
 * 
 * { Biog, BlogPost, BlogPostsBytag } -> TagList
 */

function TagList({ tags }) {
    console.debug("Taglist", "tags", tags);

    return (
        <div className="TagList">
            {tags.map(tag => (
                <div className="TagList-item" key={tag.name}>
                    <Link to={`/blog/tags/${tag.id}/${tag.name}`}>
                        {tag.name}
                    </Link>
                </div>
            ))}
        </div>
    )

}

export default TagList;
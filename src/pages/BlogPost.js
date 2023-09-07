import { useParams } from 'react';

/** Component for BlogPost
 * 
 * Props:
 * - id for the post
 * - title of the post
 * - content of the post
 * - date of publishing in UTC format
 * 
 * State:
 * - none
 * 
 * Routes -> BlogPost
 */

function BlogPost({ id, title, content, date }) {

    const { slug } = useParams();
    console.debug("BlogPost slug: ", slug);


}

export default BlogPost;
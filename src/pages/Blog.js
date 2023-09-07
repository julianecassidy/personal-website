import { useState, useEffect } from "react";
import { BlogApi } from "../siteAPIs";
import BlogPostCard from "../components/BlogPostCard";
import "./Blog.css";

/** Component for Blog
 * 
 * Props:
 * - none
 * 
 * State:
 * - posts: an array of posts from API
 * - isLoading: boolean
 * 
 * Routes -> Blog -> BlogPostCard
 */

function Blog() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.debug("Blog state posts: ", posts, "isLoading: ", isLoading);

    /** Fetches blog posts on page load. */
    useEffect(function fetchPostsOnLoad() {
        /** Get posts from Strapi API and set state with array of posts; update
         * isLoading to false.
         */
        async function getPostsFromApi() {
            console.debug("getPostsFromApi");
            try {
                const posts = await BlogApi.getPosts();
                setPosts(posts);
            }
            catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }
        getPostsFromApi();
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="Blog">
            <h1>Blog</h1>
            {posts.length === 0
                ? <p>No posts to display.</p>
                : posts.map(post =>
                    <BlogPostCard 
                      key={post.id} 
                      id={post.id}
                      permalink={post.permalink}
                      title={post.title}
                      content={post.content} 
                      date={post.date}
                    />
                )
            }
        </div>
    )
}

export default Blog;
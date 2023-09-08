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
                const postsFormatted = posts.map(post => ({
                    ...post, [post.date]: formatDate(post.date)}))
                console.log("postsFormatted", postsFormatted);
                setPosts(postsFormatted);
            }
            catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }
        getPostsFromApi();
    }, []);

    /** Takes a UTC format date '2023-09-07T03:18:34.941Z' and returns it 
     * in the format "mm-dd-yyy" */
    function formatDate(UTCDate) {
        const date = new Date(UTCDate).toLocaleDateString();
        return date
    }
    

    if (isLoading) return (
        <div className="Blog-loading">
            <p>Loading...</p>
        </div>
    )

    return (
        <div className="Blog">
            <h1>Blog</h1>
            {posts.length === 0
                ? <div className="Blog-no-posts"><p>No posts to display.</p></div>
                : <div className="Blog-posts">
                    {posts.map(post =>
                    <BlogPostCard 
                      key={post.id} 
                      id={post.id}
                      permalink={post.permalink}
                      title={post.title}
                      content={post.content} 
                      date={post.date}
                    />
                )}
                </div>
            }
        </div>
    )
}

export default Blog;
import { useState, useEffect } from "react";
import { BlogApi } from "../siteAPIs";
import BlogPostCard from "../components/BlogPostCard";
import TagList from "../components/TagList";
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
 * Routes -> Blog -> { BlogPostCard, TagList }
 */

function Blog() {

    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // console.debug("Blog state posts: ", posts, "isLoading: ", isLoading);

    /** Fetches blog posts and tags on page load. */
    useEffect(function fetchPostsOnLoad() {
        /** Get posts from Strapi API and set state with array of posts; update
         * isLoading to false.
         */
        async function getPostsFromApi() {
            // console.debug("getPostsFromApi");
            try {
                const posts = await BlogApi.getPosts();
                const postsFormatted = posts.map(post => ({
                    ...post, "date": BlogApi.formatDate(post.date)
                }));
                setPosts(postsFormatted);
            }
            catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }

        /** Get tags from Strapi API and set state with the response.
        */
        async function getTagsFromApi() {
            // console.debug("getTagsFromApi");
            try {
                const tags = await BlogApi.getTags();
                setTags(tags);
            }
            catch (err) {
                console.log(err);
            }
        }

        getPostsFromApi();
        getTagsFromApi();
    }, []);


    if (isLoading) return (
        <div className="Blog-loading">
            <h1>Blog</h1>
            <p>Loading...</p>
        </div>
    )

    return (
        <div className="Blog">
            <h1>Blog</h1>
            <div className="Blog-page-content">
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
                <div className="Blog-tags">
                    <h3>Explore More</h3>
                    <TagList tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default Blog;
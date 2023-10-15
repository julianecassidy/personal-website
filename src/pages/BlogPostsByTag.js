import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogApi } from '../siteAPIs';
import BlogPostCard from '../components/BlogPostCard';
import TagList from '../components/TagList';
import NotFoundPage from './NotFoundPage';
import './BlogPostsByTag.css';

/** Component for BlogPostsByTag
 * 
 * Props:
 * - none
 * 
 * State:
 * - posts: {id, permalink, title, content, date, canonical, tags}
 * - isLoading: boolean
 * 
 * Routes -> BlogPostsByTag
 */

function BlogPostsByTag() {

    const { id, tag } = useParams();
    const [posts, setPosts] = useState(null);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /** Fetches blog posts with tag on page load. */
    useEffect(function fetchPostsOnLoad() {
        /** Get posts with tag from Strapi API and set state with array of posts; 
         * update isLoading to false.
         */
        async function getTaggedPostsFromApi() {
            // console.debug("getPostsFromApi");
            try {
                const posts = await BlogApi.getTaggedPosts(id);
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
        getTaggedPostsFromApi();
        getTagsFromApi();
    }, [id, tag]);


    if (isLoading) return (
        <div className="BlogPostsByTag-loading">
            <h1>Blog</h1>
            <p>Loading...</p>
        </div>
    )

    if (!isLoading && posts === null) return <NotFoundPage />

    return (
        <div className="BlogPostsByTag">
            <h1>Blog</h1>
            <h2>Posts tagged: {tag}</h2>
            <div className="BlogPostsByTag-page-content">
            {posts.length === 0
                ? <div className="BlogPostsByTag-no-posts">
                    <p>No posts to display.</p>
                </div>
                : <div className="BlogPostsByTag-posts">
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

export default BlogPostsByTag;
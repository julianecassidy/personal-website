import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { BlogApi } from '../siteAPIs';
import NotFoundPage from './NotFoundPage';
import './BlogPost.css';

/** Component for BlogPost
 * 
 * Props:
 * - none
 * 
 * State:
 * - post: {id, permalink, title, content, date, canonical}
 * - isLoading: boolean
 * 
 * Routes -> BlogPost
 */

function BlogPost() {

    const { id, permalink } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.debug("BlogPost", "post:", post);

    /** Fetches blog post on page load. */
    useEffect(function fetchPostOnLoad() {
        /** Get post from Strapi API and set state with the response; update
         * isLoading to false.
         */
        async function getPostFromApi() {
            // console.debug("getPostsFromApi");
            try {
                const post = await BlogApi.getPost(id);
                // check if permalink on post matches permalink in URL
                if (post.permalink !== permalink) {
                    setPost(null);
                } else {
                    setPost({ ...post, date: BlogApi.formatDate(post.date) });
                }
            }
            catch (err) {
                console.log(err);
            }

            setIsLoading(false);
        }
        getPostFromApi();
    }, [id, permalink]);

    if (isLoading) return (
        <div className="BlogPost-loading">
            <p>Loading...</p>
        </div>
    )
    if (!isLoading && post === null) return <NotFoundPage />

    return (
        <div className='BlogPost'>
            {post.canonical &&
                <Helmet>
                    <link rel="canonical" href={post.canonical} />
                </Helmet>
            }
            <h1>{post.title}</h1>
            <div className="BlogPost-date">Published on: {post.date}</div>
            <div className='BlogPost-content'>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </div>
    )


}

export default BlogPost;
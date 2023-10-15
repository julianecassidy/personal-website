import axios from "axios";

const GITHUB_BASE_URL = "https://api.github.com/";
const STRAPI_BASE_URL = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337/api/";
const STRAPI_SORT_PARAM = "sort=publishedAt:desc";
const STAPI_RELATION_PARAM = "populate=*";

/** Project API Class.
 * 
 * Static class tying together methods to get repo and userinfo from the GitHub
 * API.
 */
class ProjectApi {

    /** Make an API get request to GitHub to get repo information for the array
     * of repo names passed in. Return an array of repo information:
     * [{id: 123,
     * name: "Friender Frontend",
     * description: "Some desc.",
     * language: "JavaScript",
     * github: "github/url.com",
     * website: "url.com"}, ...]
     */
    static async getRepos(projects) {
        // console.debug("getRepos");
        const projectsPromises = [];
        for (const proj of projects) {
            const resp = axios.get(
                `${GITHUB_BASE_URL}repos/julianecassidy/${proj}`,
            )

            projectsPromises.push(resp);
        }

        const projectsData = await Promise.all(projectsPromises);
        const projectsDataFormatted = projectsData.map((project) => {
            const dataFormatted = {};
            dataFormatted["id"] = project.data.id;
            dataFormatted["name"] = this.formatRepoTitle(project.data.name);
            dataFormatted["description"] = project.data.description;
            dataFormatted["language"] = project.data.language;
            dataFormatted["github"] = project.data.html_url;
            dataFormatted["website"] = project.data.homepage;
            return dataFormatted;
        })

        return projectsDataFormatted;
    }

    /** Take a slug style title and return a formatted version:
     * "friender-frontend" -> "Friender Frontend"
     */
    static formatRepoTitle(title) {
        let newTitle = title[0].toUpperCase();
        for (let i = 1; i < title.length; i++) {
            if (title[i] === '-') {
                newTitle += ' '
                newTitle += title[i + 1].toUpperCase();
                i++;
            } else {
                newTitle += title[i];
            }
        }
        return newTitle;
    }
}

/** Blog Post API Class.
 * Static class tying to get blog posts from Strapi API.
 * 
 */
class BlogApi {

    /** Make an API get request to Strapi to get all blog posts in the personal-blog 
     * content-type. Returns an array of post data:
     * [{id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z
     * tags: {categoryData}}, ... ]
     */
    static async getPosts() {
        // console.debug("getPosts");
        const resp = await axios.get(
            `${STRAPI_BASE_URL}personal-blogs?${STRAPI_SORT_PARAM}&${STAPI_RELATION_PARAM}`
        );
        const posts = resp.data.data.map(post => {
            const data = {
                id: post.id,
                title: post.attributes.Title,
                permalink: post.attributes.Permalink,
                content: post.attributes.Content,
                date: post.attributes.publishedAt,
            };
            return data;
        })

        return posts;
    }

    /** Make an API get request to Strapi to get all tags. Returns an array of
     * tag daga:
     * [{id: 1,
     * name: "test"}, ]
     */
    static async getTags() {
        // console.debug("getTags");
        const resp = await axios.get(`${STRAPI_BASE_URL}categories`);
        const tags = resp.data.data.map(tag => {
            const data = {
                id: tag.id,
                name: tag.attributes.Tag,
            };
            return data;
        })

        return tags;
    }

    /** Make an API get request to Strapi to get all blog posts with the given
     * tag by tag ID. Returns an array of post data:
     * [{id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z
     * tags: {categoryData}}, ... ]
     */
    static async getTaggedPosts(tag_id) {
        // console.debug("getTaggedPosts");
        const resp = await axios.get(
            `${STRAPI_BASE_URL}categories/${tag_id}?${STAPI_RELATION_PARAM}`
        );

        const posts = resp.data.data.attributes.personal_blogs.data.map(post => {
            const data = {
                id: post.id,
                title: post.attributes.Title,
                permalink: post.attributes.Permalink,
                content: post.attributes.Content,
                date: post.attributes.publishedAt,
                };
            return data;
        })

        return posts;
    }

    /** Make an API get request to Strapi to get a single blog post by id.
     * Returns a formatted object of all post data:
     * {id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z,
     * canonical: "https://julianecassidy.com/blog/2",
     * tags: ["test", "other"]}
     */
    static async getPost(id) {
        // console.debug("getPost");
        const resp = await axios.get(
            `${STRAPI_BASE_URL}personal-blogs/${id}?${STAPI_RELATION_PARAM}`);
        const post = {
            id: resp.data.data.id,
            permalink: resp.data.data.attributes.Permalink,
            title: resp.data.data.attributes.Title,
            content: resp.data.data.attributes.Content,
            date: resp.data.data.attributes.publishedAt,
            canonical: resp.data.data.attributes.Canonical,
            tags: 
                resp.data.data.attributes.categories.data.map(category =>{
                    const tag = {
                        name: category.attributes.Tag,
                        id: category.id,
                    }
                    return tag;
                }),
            }

        return post;
    }

    /** Takes a UTC format date '2023-09-07T03:18:34.941Z' and returns it 
    * in the format "mm-dd-yyy" */
    static formatDate(UTCDate) {
        const date = new Date(UTCDate).toLocaleDateString();
        return date
    }

}


export { ProjectApi, BlogApi };

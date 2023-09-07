import axios from "axios";

const GITHUB_BASE_URL = "https://api.github.com/";
const STRAPI_BASE_URL = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337/api/";

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
        for (let i = 1; i < title.length; i++){
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
     * date: 2023-09-06T22:23:59.146Z}, ... ]
     */
    static async getPosts() {
        console.debug("getPosts");
        const resp = await axios.get(`${STRAPI_BASE_URL}personal-blogs`);
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

    /** Make an API get request to Strapi to get a single blog post by id.
     * Returns a formatted object of all post data:
     * {id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z}
     */
    static async getPost(id) {
        console.debug("getPost");
        const resp = await axios.get(`${STRAPI_BASE_URL}personal-blogs/${id}`);
        const post = {
                id: resp.data.data.id,
                permalink: resp.data.data.attributes.Permalink,
                title: resp.data.data.attributes.Title,
                content: resp.data.data.attributes.Content,
                date: resp.data.data.attributes.publishedAt,
            };

        return post;
    }

}


export { ProjectApi, BlogApi };
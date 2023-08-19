import axios from "axios";

const BASE_URL = "https://api.github.com/";

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
                `${BASE_URL}repos/julianecassidy/${proj}`,
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

export default ProjectApi;

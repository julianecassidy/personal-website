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
     * {id: 123,
     * name: "Friender Frontend",
     * description: "Some desc.",
     * language: "JavaScript"}
     */
    static async getRepos(projects) {
        console.debug("getRepos");
        // const projectsData = [];
        // for (const proj of projects) {
        //     const resp = await axios.get(
        //         `${BASE_URL}repos/julianecassidy/${proj}`,
        //     )

        //     const dataFormatted = {};
        //     dataFormatted["id"] = resp.data.id;
        //     dataFormatted["name"] = this.formatRepoTitle(resp.data.name);
        //     dataFormatted["description"] = resp.data.description;
        //     dataFormatted["language"] = resp.data.language;

        //     projectsData.push(dataFormatted);
        // } 

        // return projectsData;
        return [{id: 123,
        name: "Sample Project",
        description: "test",
        language: "Python"},
        {id: 234,
            name: "Sample Project",
            description: "test",
            language: "Python"}]
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

import * as React from "react"
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ProjectApi } from "../siteAPIs";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import RoutesList from "../RoutesList";
import Footer from "../components/Footer";
import './App.css';

const PROJECTS_TO_DISPLAY = ['fetch-folio', 'react-jobify', 'flitter'];
const SCREENSHOTS = ['/fetchfolio-database-schema.png', '/jobify.png', '/flitter.png'];


/**App for Website
 * 
 * Props:
 * - none
 * 
 * State:
 * - projects: array of projects from API; empty array if unloaded
 * 
 * App -> { Nav, Routes }
 */

function App() {

  const [projects, setProjects] = React.useState([]);
  // console.debug("App state projects: ", projects);

  /** Fetches repo details on page load. */
  React.useEffect(function fetchProjectDataOnLoad() {
    /** Get project data from GitHub API and set state with array of projects. */
    async function getProjectsFromApi() {
      // console.debug("getProjectsFromApi");
      try {
        const projectsData = await ProjectApi.getRepos(PROJECTS_TO_DISPLAY);

        for (let i = 0; i < projectsData.length; i++) {
          projectsData[i]["image"] = SCREENSHOTS[i];
        }

        setProjects(projectsData);
      } catch (err) {
        console.log(err);
        setProjects([]);
      }
    }
    getProjectsFromApi();
  }, []);

  const helmetContext = {};

  return (<div className="App">
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
      <div className="App-nav-hamburger">
        <MobileNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
        <Nav />
        <RoutesList projects={projects} />
      </BrowserRouter>
      <Footer />
    </HelmetProvider>
  </div>
  )
}

export default App;
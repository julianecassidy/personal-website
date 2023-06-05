import * as React from "react"
import { Router } from "@reach/router";
import ProjectApi from "../ProjectAPI";
import About from "./about";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Home from "./home";
import NotFoundPage from "./NotFoundPage";
import './App.css';

const PROJECTS_TO_DISPLAY = ['react-jobify', 'flitter'];
const SCREENSHOTS = ['/jobify.png', '/flitter.png'];


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
  console.debug("App state projects: ", projects);

  /** Fetches repo details on page load. */
  React.useEffect(function fetchProjectDataOnLoad () {
      /** Get project data from GitHub API and set state with array of projects. */
      async function getProjectsFromApi() {
          console.debug("getProjectsFromApi");
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

  return (
  <div className="App">
     <Router basepath="/">
          <About path="about" />
          <Portfolio path="portfolio" />
          <Blog path="blog" />
          <Home path="/" projects={projects} />
          <NotFoundPage default />
      </Router>
  </div>
  )}

export default App;
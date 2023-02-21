import ProjectsList from "./ProjectsList";
import { projects } from "../data/projectsData.js"

const ProjectsPage = () => {
  return (
    <>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default ProjectsPage
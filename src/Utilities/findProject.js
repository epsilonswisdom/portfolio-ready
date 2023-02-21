import { projects } from "../data/projectsData";
import hyphenateWords from "./hyphenateWords";

function findProject(string) {
  const project = projects.find(project => {
    return hyphenateWords(project.title) === string
  })
  return project
}

export default findProject
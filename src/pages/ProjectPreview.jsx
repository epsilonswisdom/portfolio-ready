import { Link } from "react-router-dom"
import hyphenateWords from "../Utilities/hyphenateWords"

const ProjectPreview = (props) => {
  return (
    <>
    <div>
      <img 
        src={props.image}
        alt={props.title}
        />
        <section>
          <h2>
            {props.title}
          </h2>
          <Link to={hyphenateWords(props.title)}>
            <button> More Details</button>
          </Link>
        </section>
    </div>
    </>
  )
}

export default ProjectPreview
import { Container, Title } from "./style";
import PropTypes from "prop-types";



const ProjectModal = ({project}) => {

    return ( 
        <Container>
        <Title>{project.title}</Title>
        <p>{project.body}</p>
        </Container>
     );
}

ProjectModal.propTypes = {
  project: PropTypes.object
}

 
export default ProjectModal;
import { Container, Title } from "./Style";



const ProjectModal = ({project}) => {

    return ( 
        <Container>
        <Title>{project.title}</Title>
        <p>{project.body}</p>
        </Container>
     );
}
 
export default ProjectModal;
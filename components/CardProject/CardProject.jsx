import Link from "next/link";
import Button from "../ui/Button/Button";
import { ContainerCard } from "./style";
import PropTypes from "prop-types";



const CardProject = ({project}) => {

    const {title,body,id} =  project

    return (
        <ContainerCard>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link href = {'/project/' + id}><a><Button>Touch</Button></a></Link>
        </ContainerCard>
      )
}

CardProject.propTypes = {
   project: PropTypes.object
}
 
export default CardProject;
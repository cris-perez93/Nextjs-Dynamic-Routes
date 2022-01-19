
import Router from "next/router";
import Layout from "../../components/Layout/Layout";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { Modal } from "react-responsive-modal";



export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map(project => {
        return {
            params: {id: project.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: { project: data}
    }
}





export default function ProjectPage({project}) {


return( 

        <Layout>
            <Modal 
            styles={{modal: { maxWidth: "1200px", height : '500px',width:"800px", backgroundColor: 'black'}}}
            center 
            
            open
             onClose={() => Router.push("/")}>
            <ProjectModal project={project} />
            </Modal>
            
        </Layout>
)
}




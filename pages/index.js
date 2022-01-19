import Layout from "./../components/Layout/Layout";
import Hello from "./../components/Hello/Hello";
import CardProject from "../components/CardProject/CardProject";
import {
  ContainerProjects,
  ContainerCards,
  ContainerHome,
} from "../components/ui/Container";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  return (
    <Layout>
      <ContainerHome>
        <Hello />
        <ContainerProjects>
          <h1>Projects</h1>
          <ContainerCards>
            {data.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </ContainerCards>
        </ContainerProjects>
      </ContainerHome>
    </Layout>
  );
}

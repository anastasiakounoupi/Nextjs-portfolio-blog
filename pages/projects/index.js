import AllProjects from '../../components/projects/all-projects'
import { getAllProjects } from '../../lib/projects-util';


const AllProjectsPage = ({ posts }) => {
    return (
        <AllProjects posts={posts} />
    );
}

export function getStaticProps() {
    const allProjects = getAllProjects();

    return {
        props: {
            posts: allProjects
        }
    }
}

export default AllProjectsPage;
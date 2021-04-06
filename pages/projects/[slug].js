import ProjectContent from '../../components/projects/project-detail/project-content'
import { getProjectData, getProjectsFiles } from '../../lib/projects-util';

const ProjectDetailPage = ({ post }) => {
    return (
        <ProjectContent post={post} />
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const projectData = getProjectData(slug);

    return {
        props: {
            post: projectData
        }
    }
}

export function getStaticPaths() {
    const projectFilenames = getProjectsFiles();

    const slugs = projectFilenames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default ProjectDetailPage;
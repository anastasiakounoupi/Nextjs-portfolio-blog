import ProjectItem from './project-item';
import classes from './projects-grid.module.css'

const ProjectsGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts.map(post => <ProjectItem key={post.slug} post={post} />)}
        </ul>
    );
}

export default ProjectsGrid;
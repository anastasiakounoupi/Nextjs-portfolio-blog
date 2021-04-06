import classes from './all-projects.module.css';
import ProjectsGrid from './projects-grid';

const AllProjects = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All Projects</h1>
            <ProjectsGrid posts={posts} />
        </section>
    );
}

export default AllProjects;
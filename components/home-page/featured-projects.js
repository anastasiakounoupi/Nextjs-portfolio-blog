import classes from './featured-projects.module.css'
import ProjectsGrid from '../projects/projects-grid'

const FeaturedProjects = ({ posts }) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Projects</h2>
            <ProjectsGrid posts={posts} />
        </section>
    );
}

export default FeaturedProjects;
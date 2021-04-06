import classes from './featured-projects.module.css'
import ProjectsGrid from '../projects/projects-grid'
import Link from 'next/link';

const FeaturedProjects = ({ posts }) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Projects</h2>
            <h3><Link href='/projects'>Click here to see all Projects</Link></h3>
            <ProjectsGrid posts={posts} />
        </section>
    );
}

export default FeaturedProjects;
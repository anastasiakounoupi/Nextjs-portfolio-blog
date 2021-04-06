import { Fragment } from 'react';
import Hero from '../components/home-page/hero'
import FeaturedProjects from '../components/home-page/featured-projects'
import { getFeaturedProjects } from '../lib/projects-util';

const HomePage = ({ posts }) => {
    return (
        <Fragment>
            <Hero />
            <FeaturedProjects posts={posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredProjects = getFeaturedProjects();

    return {
        props: {
            posts: featuredProjects
        }
    }
}

export default HomePage;
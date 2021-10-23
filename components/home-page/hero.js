import Image from 'next/image';

import classes from './hero.module.css'


const Hero = () => {
    return (
        <section className={classes.hero}>
            <h1>Hi, I'm Anastasia</h1>
            <h2>Check out my Projects below and in the all projects section</h2>
        </section>
    );
}

export default Hero;
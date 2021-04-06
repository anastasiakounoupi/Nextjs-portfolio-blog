import Image from 'next/image';

import classes from './hero.module.css'


const Hero = () => {
    return (
        <section className={classes.hero}>
            <h1>Hi, I'm Anastasia</h1>

            <p>My experience in the position
            of technical support for two large
            international companies led me
            to the realization that I wanted more
            than to just help users navigate their
            way through software applications,
            I desired to be actually involved in
            developing them! My technical
            background paired with my
            hard-working attitude and countless
            hours of studying and hands-on
            coding, are the elements which
            helped me make my new passion
            a reality and develop my stack
            which revolves around Javascript,
            both in the front-end (React.js) and
in the back-end (Node.js)</p>
            <h2>Check out my Projects below and in the all projects section</h2>
        </section>
    );
}

export default Hero;
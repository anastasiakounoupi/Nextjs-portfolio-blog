import Link from 'next/link';
import Image from 'next/image';
import classes from './project-item.module.css'

const ProjectItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post

    return (
        <li className={classes.post}>
            <Link href={`/projects/${slug}`}>
                <a>
                    <div className={classes.image}>
                        <Image src={`/images/projects/${image}`} alt={title} width={300} height={200} layout="responsive" />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{date}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default ProjectItem;
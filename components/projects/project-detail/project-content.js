import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import ProjectHeader from './project-header'
import classes from './project-content.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectContent = ({ post }) => {

    const customRenderers = {
        // image(image) {
        //     return <Image src={`/images/projects/${image.src}`} alt={image.alt} width={600} height={300} />
        // },
        paragraph(paragraph) {
            const { node } = paragraph;

            if (node.children[0].type === 'image') {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image src={`/images/projects/${image.url}`} alt={image.alt} width={600} height={300} />
                    </div>
                )
            }
            return <p>{paragraph.children}</p>;
        }
    };

    return (
        <article className={classes.content}>
            <ProjectHeader title={post.title} image={`/images/projects/${post.image}`} />
            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
            <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    );
}

export default ProjectContent;
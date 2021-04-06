import classes from './logo.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
    return (
        <div className={classes.logo}>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </div>
    );
}

export default Logo;
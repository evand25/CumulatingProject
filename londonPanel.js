import classes from './body.module.css';

function LondonInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default LondonInfo;
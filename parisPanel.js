import classes from './body.module.css';

function ParisInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default ParisInfo;
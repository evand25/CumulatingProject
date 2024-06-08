import classes from './body.module.css';

function NaplesInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default NaplesInfo;
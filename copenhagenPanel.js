import classes from './body.module.css';

function CopenhagenInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default CopenhagenInfo;
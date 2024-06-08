import classes from './body.module.css';

function MunichInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default MunichInfo;
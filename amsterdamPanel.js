import classes from './body.module.css';

function BarcelonaInfo(props) {

    const { children } = props;

    return (
        <p className={classes.body}>{children}</p>
    )
}

export default BarcelonaInfo;
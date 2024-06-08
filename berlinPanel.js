import classes from './body.module.css';

function BerlinInfo(props) {

    const { children } = props;

    return (
        <>
        <p className={classes.body}>{children}</p>
        </>
    )
}

export default BerlinInfo;
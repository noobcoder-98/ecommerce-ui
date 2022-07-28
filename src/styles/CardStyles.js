import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    container: {
        width: "15vw",
        height: '31em',
        padding: "1em",
        margin: '1em',
        "&:hover": {
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",

            cursor: 'pointer'
        },
        display: 'inline-flex',
        flexDirection: "column",
        justifyContent: "space-around",
        [theme.breakpoints.down('md')]: {
            fontSize: "0.65em !important"
        },
    },
    divider: {marginLeft: '0.15em', marginRight: '0.15em', color: '#858585'},
    title: {fontSize: '0.75em', color: '#858585', fontWeight: 600, marginBottom: '1.5em'},
    discount: {color: 'rgba(36, 36, 36, 0.6)', fontSize: '0.75em', marginLeft: '0.5em'},
    price: {fontSize: '0.8em', color: '#858585', marginTop: 0},
    progress: {
        // margin: theme.spacing(1),
        // borderRadius: '10px !important',
        width: '50%',
        // position: 'absolute'
        // progress-bar
        backgroundColor: '#FDDCCB',
        color: '#FD752E',
        display: 'inline-block'
    },
    timer: {
        width: '40%',
        marginLeft: '1.5em',
        fontSize: '0.8em',
        color: '#858585'
    },
    "@global .progress-bar": {
        backgroundColor: '#FD752E'
    },
    "@global .ripple,.ripple:before,.ripple:after": {
        display: 'block',
        borderRadius: '2px',
        width: '2px',
        height: '2px',
        webkitAnimation: 'rip 6s infinite ease-out',
        mozAnimation: 'rip 6s infinite ease-out',
    },
    "@global .react-ripples": {
        display: 'inline-flex !important'
    },
    paper: {
        margin: 'auto',
        maxWidth: "100%"
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 0
    },
    tikiArrow: {
        maxHeight: "20px"
    },
    priceOrigin: {
        color: "lightgrey",
        textDecoration: "line-through"
    },
    removeLinkStyle:{
        textDecoration: "none !important",
        color: "inherit !important" ,
    },
}));

export default useStyles;

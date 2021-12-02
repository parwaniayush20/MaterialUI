import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme) =>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:"30px 0"
    },
    icon:{
        marginRight:"15px",

    },
    button:{
        marginTop:"10px",
    },
    cardGrid:{
        padding:"20px 0",
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent:{
        flexGrow:1,
    },
    card:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:"10px 0",
    }
}));

export default useStyles;
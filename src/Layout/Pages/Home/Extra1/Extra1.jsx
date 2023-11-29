import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Extracard from './Extracard';
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '24px !important',
        paddingTop: '15px',
        paddingBottom: '5px',
        color: 'white'
    }
}));
const Extra1 = () => {
    const classes = useStyles();
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <Container maxWidth='xl' sx={{ bgcolor: 'secondary.light', my: 8 }}>
            <Typography className={classes.typo} textAlign='center' >
                Courses We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, md: 2 }}>

                
            {services.map(service=><Extracard key={service.id} service={service}></Extracard>)}
           
    </Grid>

        </Container>
    );
}

export default Extra1;

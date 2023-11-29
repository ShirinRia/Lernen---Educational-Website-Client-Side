import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Extracard from './Extracard';
import { experimentalStyled as styled } from '@mui/material/styles';
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '32px !important',
        paddingTop: '5px',
        paddingBottom: '10px',
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
        <Container maxWidth='xl' sx={{ bgcolor: 'secondary.light', my: 8, py: 4 }}>
            <Typography className={classes.typo} textAlign='center' >
                Courses We Provide
            </Typography>

            <Box sx={{
                display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 1,
                rowGap: 3,
            }}>
                {services.map(service => <Extracard key={service.id} service={service}></Extracard>)}
            </Box>

            {/*  */}



        </Container>
    );
}

export default Extra1;

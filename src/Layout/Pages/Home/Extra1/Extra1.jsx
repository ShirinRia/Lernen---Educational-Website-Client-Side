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
        fontSize: '48px !important',
        paddingTop: '5px',
        paddingBottom: '25px',
        color:"darkblue"
    }
}));
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const Extra1 = () => {
    const classes = useStyles();
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])
// bgcolor: grey[200],
    return (
        <Container maxWidth='xl' sx={{  my: 8, py: 4 }}>
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

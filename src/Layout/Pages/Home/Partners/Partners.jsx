import banner from '../../../../assets/banner.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '32px !important',
        paddingTop: '15px',
        paddingBottom: '5px',
        color: 'black'
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
const Partners = () => {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const style = {

        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const classes = useStyles();
    const [partners, setpartners] = useState([])
    useEffect(() => {
        fetch('/partnership.json')
            .then(res => res.json())
            .then(data => setpartners(data))
    }, [])
    return (
        <Container maxWidth='xl' sx={{ my: 8 }}>
            <Typography className={classes.typo} textAlign='center' >
                Trusted by over 15,000 companies and millions of learners around the world
            </Typography>
            <Box sx={style}>


                <Stack direction="row" spacing={2} sx={{ my: 4 }}>
                    {partners.map(partner => <Item sx={{ width: '180px' }} key={partner.id}>
                        <Box sx={{ height: '100px' }}>
                            <img src={partner.logo} alt="" height={'100%'} width={'100%'} />
                        </Box>
                        <p style={{ textAlign: 'justify' }}>{partner.brief_description}</p>
                    </Item>)}


                </Stack>


            </Box>
        </Container>

    );
};

export default Partners;
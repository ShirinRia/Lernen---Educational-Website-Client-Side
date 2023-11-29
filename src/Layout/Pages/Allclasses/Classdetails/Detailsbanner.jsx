import banner from '../../../../assets/banner.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Divider, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
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
const Detailsbanner = ({ specclass }) => {
    console.log(specclass)
    const { _id, title, name, email, price, description, photo,totalenrollment } = specclass

    const style = {

        height: '80vh',
        bgcolor: 'background.paper',
        display: 'flex',
        justifyItems: 'center',
        backgroundColor: grey[900],
        color: 'white',
        alignItems: 'center',
        position: 'relative',
        gap: '10px',
       
    };

    return (

        <Box sx={style}>
            <Box sx={{ textAlign: 'left', mr: 10, ml: 5, px: 5, width: '60%' }}>
                {/* <p >
                    category
                </p> */}
                <p style={{ fontSize: '36px' }}>
                    {title}
                </p>
                <p style={{ mt: 1 }}>
                    {description}
                </p>
                <p style={{ mt: 1, fontSize: 18 }}>
                    Created by <span style={{ color: 'darksalmon', fontWeight: 600 }}>{name}</span>
                </p>
                <p style={{ mt: 1, fontSize: 18, color: 'darksalmon', fontWeight: 600}}>
                   {totalenrollment} enrolled this course
                </p>
            </Box>
            {/* sx={{ width: 345 ,position:'absolute', top:'10%', right:'5%'}} */}
            {/* <Box sx={{ textAlign: 'left', width: '33%', height:'500px', position:'absolute', top:'10%', right:'5%', ml: 10, p: 5, boxShadow: 5, }}> */}

            <Box sx={{ textAlign: 'left', width: '40%' }}>
                <Card sx={{ width: 345, position: 'absolute', top: '10%', right: '5%' }}>

                    <CardMedia
                        component="img"
                        height='100%'
                        width='100%'
                        image={photo}
                        alt="green iguana"

                    />
                    <Divider />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            $ {price}

                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Button href={`/payment/${_id}`} variant="contained" color="primary" sx={{ width: '100%', fontWeight: 600, fontSize: 18 }}>
                            Pay
                        </Button>
                    </CardActions>
                </Card></Box>

        </Box>

        // </Box>

    );
};

export default Detailsbanner;
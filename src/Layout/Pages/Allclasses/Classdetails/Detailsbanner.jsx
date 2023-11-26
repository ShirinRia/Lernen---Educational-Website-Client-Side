import banner from '../../../../assets/banner.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
const Detailsbanner = ({specclass}) => {
    console.log(specclass)
    const {_id,title,name,email,price,description,photo}=specclass
    
    const style = {

        height: '80vh',
        bgcolor: 'background.paper',
        display: 'flex',
        justifyItems: 'center',
        backgroundColor: 'gray',
        alignItems: 'center',
        position: 'relative',

    };

    return (

        <Box sx={style}>
            <Box sx={{ textAlign: 'left', width: '33%', ml: 10, p: 5, boxShadow: 5, }}>
                <p >
                    category
                </p>
                <p >
                    {title}
                </p>
                <p  style={{ mt: 2 }}>
                    {description}
                </p>
                <p  style={{ mt: 2 }}>
                 Created by {name}
                </p>
            </Box>
            {/* <Box sx={{ textAlign: 'left', width: '33%', height:'500px', position:'absolute', top:'10%', right:'5%', ml: 10, p: 5, boxShadow: 5, }}> */}
            <Card sx={{ width: 345 ,position:'absolute', top:'10%', right:'5%'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={photo}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {price}
                           
                        </Typography>
                       
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={`/payment/${_id}`} variant="contained" color="primary">
                        Pay
                    </Button>
                </CardActions>
            </Card>
        </Box>

        // </Box>

    );
};

export default Detailsbanner;
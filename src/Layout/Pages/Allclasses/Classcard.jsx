import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Classcard = ({classe}) => {
    const {_id,title,name,email,price,description,photo}=classe

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }

                title={title}
                subheader={name}
            />
            <CardMedia
                component="img"
                height="194"
                image={photo}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                   {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <Button variant="contained" href={`/details/${_id}`}>Enroll</Button>
            
            </CardActions>

        </Card>
    );
}
export default Classcard;
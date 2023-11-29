import * as React from 'react';
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
import { useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const Reviews = ({ review }) => {
    const { _id, description, rating, courseid, photo, name } = review;
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={photo}
                alt="Live from space album cover"
            />
        </Card>
    );
};

export default Reviews;
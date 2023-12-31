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
import Reviews from './reviews';

const Classs = () => {
    const reviews=useLoaderData()
    return (
        <div>
          { reviews.map((review) =><Reviews key={review._id} review={review}></Reviews>)}
        </div>
    );
};

export default Classs;
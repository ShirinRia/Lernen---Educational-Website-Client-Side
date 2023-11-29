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

const Extracard = ({service}) => {
    const theme = useTheme();
    return (
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
               {service.name}
              </Typography>
             
            </CardContent>
           
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={service.image}
            alt="Live from space album cover"
          />
        </Card>
      );
};

export default Extracard;
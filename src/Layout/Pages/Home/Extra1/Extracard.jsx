import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const Extracard = ({service}) => {
    const theme = useTheme();
    return (
        <Card sx={{ display: 'flex',mx:12 }}>
         
            <CardContent sx={{ flex: '1  auto' }}>
              <Typography component="div" variant="h5">
               {service.name}
              </Typography>
              <Typography component="div" variant="body2">
               {service.briefdescription}
              </Typography>
             
            </CardContent>
           
          
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
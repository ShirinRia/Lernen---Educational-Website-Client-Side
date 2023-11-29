import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Showcard = ({title}) => {
  return (
    <Card sx={{ minWidth: 275 , minHeight:275,display:'flex', justifyContent:'center',alignItems: 'center',}}>
      <CardContent >
       
        <Typography variant="h5" component="div">
          {title}
        </Typography>
       
      </CardContent>
      {/* <CardActions>
        <Button size="small">Go to your dashboard</Button>
      </CardActions> */}
    </Card>
  );
}
export default Showcard;
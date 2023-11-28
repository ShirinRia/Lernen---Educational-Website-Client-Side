import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

  typo: {

      textAlign: 'center',
      fontSize: '24px !important',
      paddingTop: '25px',
      paddingBottom: '25px',

  }
}));
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);
const BasicCard = ({title,value}) => {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div" className={classes.typo}>
        {title}
        </Typography>
        
        <Typography variant="body2" className={classes.typo}>
          {value}
        </Typography>
      </CardContent>
     
    </Card>
  );
};

export default BasicCard;
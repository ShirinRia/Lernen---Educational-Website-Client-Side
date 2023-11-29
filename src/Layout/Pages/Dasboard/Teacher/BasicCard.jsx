import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

  typo: {

      textAlign: 'center',
      fontSize: '32px !important',
      paddingTop: '25px',
      paddingBottom: '25px',
      color:"darkblue"

  }
}));
const BasicCard = ({title,value,color}) => {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: 275,bgcolor:color }}>
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
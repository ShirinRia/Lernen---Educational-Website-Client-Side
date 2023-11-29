import banner from '../../../assets/banner.jpg'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

const style = {

   
    height: '80vh',
    bgcolor: 'background.paper',
    display: 'flex',
    justifyItems: 'center',

    backgroundSize: "cover",
    alignItems: 'center',
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",

};

const Extra2 = () => {
    return (
        <Box sx={style}>
            <Box sx={{ textAlign: 'left', width: '33%', ml: 10, p: 5, boxShadow: 5, }}>
                <Typography variant="h3" component="h2">
                    The skills you need
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Discover the courses that will help you get where you want to go.
                </Typography>
            </Box>

        </Box>
    );
};

export default Extra2;
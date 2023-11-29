import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import instructor from '../../../../assets/instructor.jpg'
const JoinasTeacher = () => {
    const style = {

        bgcolor: 'background.paper',
        display: 'flex',
        gap:24,
        alignItems: 'center',
       
    };
    const style2 = {

        flexDirection: 'column',
        display: 'flex',
        gap:5,
       


    };
    return (
        <Container maxWidth='lg'>
            <Box sx={style}>
               
                    <img src={instructor} alt="" />
              
                <Box sx={style2}>
                    <Typography textAlign='left' variant="h3">
                    Become an instructor
                    </Typography>
                    <Typography textAlign='left'>Instructors from around the world teach millions of learners on Lernen. We provide the tools and skills to teach what you love.Instructors from around the world teach millions of learners on Lernen. We provide the tools and skills to teach what you love. Trusted by over 15,000 companies and millions of learners around the world
                    </Typography>
                    <Button href={'/techon'} variant="contained" >
                        Start Teaching Today
                    </Button>
                </Box>

            </Box>
        </Container>


    );
};

export default JoinasTeacher;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import instructor from '../../../../assets/instructor.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const JoinasTeacher = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const style = {

        bgcolor: 'background.paper',
        display: 'flex',
        gap: 24,
        alignItems: 'center',

    };
    const style2 = {

        flexDirection: 'column',
        display: 'flex',
        gap: 5,



    };
    return (
        <Container maxWidth='lg'>
            <Box sx={style}>

              
                    <img data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100" src={instructor} alt="" />
               

                <Box sx={style2} data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" data-aos-delay="100">
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
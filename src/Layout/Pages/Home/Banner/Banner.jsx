import banner from '../../../../assets/banner.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../../assets/01.jpg'
import banner2 from '../../../../assets/02.jpg'
import banner3 from '../../../../assets/03.jpg'
import banner4 from '../../../../assets/04.png'
import Carousel from 'react-elastic-carousel'
const Banner = () => {
  
    return (
//  <Box sx={style}>
//             <Box sx={{ textAlign: 'left', width: '33%', ml: 10, p: 5, boxShadow: 5, }}>
//                 <Typography variant="h3" component="h2">
//                     The skills you need
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 2 }}>
//                     Discover the courses that will help you get where you want to go.
//                 </Typography>
//             </Box>

//         </Box>
        // <Carousel>
        //         <div>
        //             <img src={banner1} />

        //         </div>
        //         <div>
        //             <img src={banner2} />

        //         </div>
        //         <div>
        //             <img src={banner3} />

        //         </div>
        //         <div>
        //             <img src={banner4} />

        //         </div>
        //         {/* <div>
        //             <img src={banner5} />

        //         </div>
        //         <div>
        //             <img src={banner6} />

        //         </div>
        //         <div>
        //             <img src={banner7} />

        //         </div> */}
        //     </Carousel>
       <Container maxWidth='xl' sx={{border:2,height:'80vh'}}> <Carousel
       transitionMs={100} enableAutoPlay autoPlaySpeed={1500}
       style={{height:'100%'}}
   >
       <img src={banner1} alt="" height={'100%'} width={'100%'}  />
       {/* <img src={banner} alt="" height={'100%'} width={'100%'}  /> */}
       <img src={banner2} alt="" height={'100%'} width={'100%'}  />
       <img src={banner3} alt="" height={'100%'} width={'100%'}  />
       <img src={banner4} alt="" height={'100%'} width={'100%'}  />
       {/* <img src={banner6} alt="" className='w-[100vw] h-[70vh]' /> */}

   </Carousel></Container>


    );
};

export default Banner;
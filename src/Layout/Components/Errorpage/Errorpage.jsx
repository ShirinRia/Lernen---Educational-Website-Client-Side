import { FcDeleteDatabase } from 'react-icons/fc';
import { FaBan } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { BiUnlink } from 'react-icons/bi';
import { SiProgress } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Errorpage = () => {
  return (
   
        <div style={{ height:'100vh' ,textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>

              <h1 style={{fontSize:'100px' , fontWeight:700, color:'red'}}>

                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    '404',
                    1000,
                     'Page not found',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '5rem', display: 'inline-block' }}
                  repeat={Infinity}
                /></h1>
              <p style={{fontSize:'24px' , fontWeight:700}} >We looked everywhere for this page. <br></br> Are you sure the URL is correct? </p>

         
            <Link to={'/'} style={{fontSize:'24px' , fontWeight:500}}>Back to Home</Link>
         
        </div>
    
  );
};

export default Errorpage;
import { Box } from "@mui/material";
import Banner from "./Banner/Banner";
import JoinasTeacher from "./Joinasteacher/JoinasTeacher";
import Partners from "./Partners/Partners";
import BasicCard from "../Dasboard/Teacher/BasicCard";
import useAllusers from "../../../Hooks/useAllusers";
import useAllclass from "../../../Hooks/useAllclass";
import Featuredcourse from "./Featuredcourse/Featuredcourse";
import Reviews from "./Reviews/Reviews";
import Extra1 from "./Extra1/Extra1";


const Home = () => {
    const [users]=useAllusers()
    const [classes]=useAllclass()
    const totalenrollment = classes.reduce((total, item) => total + item.totalenrollment, 0);
    
    return (
        <div >
            <Banner />
            <Partners />
            <Box sx={{ display: 'flex', gap: 2, mb: 4,justifyContent:'center' }}>

            <BasicCard title={'Total User'}  value={users.length}/>
                <BasicCard title={'Total Classes'} value={classes.length}/>
                <BasicCard title={'Total enrollment'} value={totalenrollment} />
                
            </Box>
            <Featuredcourse/>
            <JoinasTeacher />
            <Extra1/>
           <Reviews/>
        </div>
    );
};

export default Home;
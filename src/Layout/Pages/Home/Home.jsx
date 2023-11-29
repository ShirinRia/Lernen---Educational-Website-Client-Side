import Banner from "./Banner/Banner";
import JoinasTeacher from "./Joinasteacher/JoinasTeacher";
import Partners from "./Partners/Partners";
import BasicCard from "../Dasboard/Teacher/BasicCard";
import useAllusers from "../../../Hooks/useAllusers";
import useAllclass from "../../../Hooks/useAllclass";
import Featuredcourse from "./Featuredcourse/Featuredcourse";
import Extra1 from "./Extra1/Extra1";
import Extra2 from "./Extra2";
import Feedbacks from "./Reviews/Feedbacks";
import { Box, Container } from "@mui/material";


const Home = () => {
    const [users] = useAllusers()
    const [classes] = useAllclass()
    const totalenrollment = classes.reduce((total, item) => total + item.totalenrollment, 0);

    return (
        <div >
            <Banner />
            <Partners />
            <Extra2 />
            <Box sx={{ display: 'flex', gap: 2, my: 8, justifyContent: 'center' }}>

                <BasicCard title={'Total User'} value={users.length} />
                <BasicCard title={'Total Classes'} value={classes.length} />
                <BasicCard title={'Total enrollment'} value={totalenrollment} />

            </Box>
            <Featuredcourse />
            <JoinasTeacher />
            <Extra1 />
            <Container maxWidth='xl' sx={{ my:4,border:1}}>
            <Box sx={{width:'maxcontent', my:4,px:8,}}>
           
            <Feedbacks />
            </Box>
            </Container>
           
           
        </div>
    );
};

export default Home;
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

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const Home = () => {
    const [users] = useAllusers()
    const [classes] = useAllclass()
    const totalenrollment = classes.reduce((total, item) => total + item.totalenrollment, 0);

    return (
        <div >
            <Banner />
            <Partners />
            <Extra2 />
            <Box sx={{ display: 'flex', flexDirection:{xs:'column',md:'row'}, gap: 8, my: 8, justifyContent: 'center',}}>

                <BasicCard title={'Total User'} value={users.length} color={"blanchedalmond"} />
                <BasicCard title={'Total Classes'} value={classes.length} color={"ButtonShadow"}  />
                <BasicCard title={'Total enrollment'} value={totalenrollment} color={"aliceblue"} />

            </Box>
            <Featuredcourse />
            <JoinasTeacher />
            <Extra1 />
            <Container maxWidth='xl' sx={{ my:4,py:5,bgcolor: grey[200],}}>
            <Box sx={{width:'maxcontent', my:4,px:8,}}>
           
            <Feedbacks />
            </Box>
            </Container>
           
           
        </div>
    );
};

export default Home;
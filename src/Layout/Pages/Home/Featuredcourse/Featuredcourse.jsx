
import useAllclass from "../../../../Hooks/useAllclass";
import Classcard from "../../Allclasses/Classcard";
import { Box, Container, Typography } from "@mui/material";

import Grid from '@mui/material/Grid';


const Featuredcourse = () => {
    const [classes] = useAllclass()
    const length = 6
    const sortallclass = [...classes].sort((a, b) =>
        parseInt(a.totalenrollment) < parseInt(b.totalenrollment) ? 1 : -1,
    );
    console.log('sortallclass', sortallclass)
    return (
        <Container maxWidth='lg' sx={{  my:8 }} >
            <Typography variant="h3" style={{ textAlign: 'center', fontWeight: 600 }}>
                Top Courses
            </Typography>
            {/*             
                <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-6xl mx-auto my-16">
                    {
                        sortallclass.slice(0, length).map(classe => <Classcard key={classe._id}
                            classe={classe}></Classcard>)
                    }
                </Box> */}
            <Box sx={{ flexGrow: 1, my:4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    
                    {sortallclass.slice(0, length).map((classe, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            
                            <Classcard key={classe._id}
                            classe={classe}></Classcard>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Container>
    );
};

export default Featuredcourse;
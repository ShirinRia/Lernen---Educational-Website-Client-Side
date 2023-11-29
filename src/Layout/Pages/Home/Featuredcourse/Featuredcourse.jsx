
import useAllclass from "../../../../Hooks/useAllclass";
import Classcard from "../../Allclasses/Classcard";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '48px !important',
        paddingTop: '5px',
        paddingBottom: '25px',
        color:"darkblue"
    }
}));
const Featuredcourse = () => {
    const styleclasses = useStyles();
    const [classes] = useAllclass()
    const approvedClasses = classes.filter(classe => classe.status === "Approved")
    const length = 6
    const sortallclass = [...approvedClasses].sort((a, b) =>
        parseInt(a.totalenrollment) < parseInt(b.totalenrollment) ? 1 : -1,
    );
    console.log('sortallclass', sortallclass)
    return (
        <Container maxWidth='lg' sx={{  my:8 }} >
            <Typography className={styleclasses.typo}>
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
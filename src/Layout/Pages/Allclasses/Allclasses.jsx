import { Container } from "@mui/material";
import useAllclass from "../../../Hooks/useAllclass";
import Classcard from "./Classcard";


const Allclasses = () => {
    const [classes,refetch] = useAllclass();
    const isallclassnav=true
    const approvedClasses=classes.filter(classe => classe.status ==="Approved")
    return (
        <Container maxWidth='xl' sx={{my:8}}>
            {
                approvedClasses.map(classe=><Classcard key={classe._id} classe={classe} isallclassnav={isallclassnav}></Classcard>)
            }
        </Container>
    );
};

export default Allclasses;

import Review from "./Review";
import useAllreview from "../../../../Hooks/useAllreview";
import { Container } from "@mui/material";


const Reviews = () => {

    const [reviews]=useAllreview()
   
    return (
        <Container maxWidth='xl' sx={{ mx:4  ,  my:16 ,py:16}}>
           <Review reviews={reviews}></Review>
        </Container>

    );
};

export default Reviews;
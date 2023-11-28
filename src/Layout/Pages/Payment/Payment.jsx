import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../components/Sectiontitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const specclass=useLoaderData()
    return (
        <Box sx={{my:8 , mx:'auto', width:'max-content',}}>
            {/* <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle> */}
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm specclass={specclass}></CheckoutForm>
                </Elements>
            </div>
        </Box>
    );
};

export default Payment;
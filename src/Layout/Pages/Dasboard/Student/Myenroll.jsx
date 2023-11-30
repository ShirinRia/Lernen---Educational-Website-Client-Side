import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../../../Hooks/useAxios/useAxiossecure";
import usePayment from "../../../../Hooks/usePayment";
import Classcard from "../../Allclasses/Classcard";
import useAuth from "../../../../Hooks/useAuth";
import { Box } from "@mui/material";

const Myenroll = () => {

    const { user } = useAuth()

    const axiosSecure = useAxiossecure()

    const { refetch, data: userclasses = [] } = useQuery({

        queryKey: ["userclasses"],  // should be unique
        queryFn: async () => {

            const res = await axiosSecure.get(`/studentclasses?email=${user?.email}`)
            return res.data
        }
    });

    return (
        <Box sx={{
            mb:8,
           display: 'grid', justifyContent: 'center', gridTemplateColumns: {sm:'repeat(1, 1fr)', md:'repeat(4, 1fr)'}, columnGap: 1,rowGap: 3,
        }}> 
            {
                userclasses.map(classe => <Classcard key={classe._id} classe={classe}></Classcard>)
            }
        </Box > 
    );
};

export default Myenroll;
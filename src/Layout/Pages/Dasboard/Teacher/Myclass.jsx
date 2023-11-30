import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../../../Hooks/useAxios/useAxiossecure";

import Classcard from "../../Allclasses/Classcard";
import useAuth from "../../../../Hooks/useAuth";
import { Box } from "@mui/material";

const Myclass = () => {

    const { user } = useAuth()

    const axiosSecure = useAxiossecure()

    const { refetch, data: teacherclasses = [] } = useQuery({

        queryKey: ["teacherclasses"],  // should be unique
        queryFn: async () => {

            const res = await axiosSecure.get(`/teacherclasses?email=${user?.email}`)
            return res.data
        }
    });

    return (
        <Box sx={{
            mb:8,
           display: 'grid', justifyContent: 'center', gridTemplateColumns: {sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}, columnGap: 1,rowGap: 3,
        }}>
            {
                teacherclasses.map(classe => <Classcard key={classe._id} classe={classe} refetch={refetch}></Classcard>)
            }
        </Box>
    );
};

export default Myclass;
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../../../Hooks/useAxios/useAxiossecure";
import usePayment from "../../../../Hooks/usePayment";
import Classcard from "../../Allclasses/Classcard";
import useAuth from "../../../../Hooks/useAuth";

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
        <div>
            {
                userclasses.map(classe => <Classcard key={classe._id} classe={classe}></Classcard>)
            }
        </div>
    );
};

export default Myenroll;
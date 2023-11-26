import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../../../../Hooks/useAxios/useAxiossecure";

import Classcard from "../../Allclasses/Classcard";
import useAuth from "../../../../Hooks/useAuth";

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
        <div>
            {
                teacherclasses.map(classe => <Classcard key={classe._id} classe={classe} refetch={refetch}></Classcard>)
            }
        </div>
    );
};

export default Myclass;
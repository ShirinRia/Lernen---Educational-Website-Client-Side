import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxios/useAxiossecure";

const useStudent = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiossecure();
    const { data: isStudent, isPending: isStudentLoading } = useQuery({
        queryKey: [user?.email, 'isStudent'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            console.log(res.data);
            return res.data?.Student;
        }
    })
    return [isStudent, isStudentLoading]
    // return [isAdmin]
};

export default useStudent;
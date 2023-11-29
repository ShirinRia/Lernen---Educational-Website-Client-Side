import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxios/useAxiossecure";

const useTeacher = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiossecure();
    const { data: isInstructor, isPending: isInstructorLoading } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res.data);
            return res.data?.Instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
    // return [isAdmin]
};

export default useTeacher;
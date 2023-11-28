import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxios/useAxiossecure";


// 

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiossecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
    // return [isAdmin]
};

export default useAdmin;
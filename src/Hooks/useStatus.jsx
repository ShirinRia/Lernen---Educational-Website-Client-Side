import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
import useAuth from "./useAuth";

const useStatus = () => {
    const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch,data: status, isPending: isstatusLoading } = useQuery({
   
    queryKey: [user?.email, 'status'],// should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/instructor?email=${user?.email}`)
        return res.data?.status
      },
  });
  return [status,refetch]
};

export default useStatus;
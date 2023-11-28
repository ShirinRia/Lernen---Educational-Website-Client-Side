import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
import useAuth from "./useAuth";

const usePayment = () => {
    const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:payments=[] } = useQuery({
   
    queryKey: ["payments"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/payments/?email=${user?.email}`)
        return res.data
      },
  });
  return [payments,refetch]
};

export default usePayment;
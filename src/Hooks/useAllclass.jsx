import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
// import useAuth from "./useAuth";

const useAllclass = () => {
    // const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:classes=[] } = useQuery({
   
    queryKey: ["classes"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/classes`)
        return res.data
      },
  });
  return [classes,refetch]
};

export default useAllclass;
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
// import useAuth from "./useAuth";

const useAllreviewjsxjsx = () => {
    // const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:reviews=[] } = useQuery({
   
    queryKey: ["reviews"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/reviews`)
        return res.data
      },
  });
  return [reviews,refetch]
};

export default useAllreviewjsxjsx;
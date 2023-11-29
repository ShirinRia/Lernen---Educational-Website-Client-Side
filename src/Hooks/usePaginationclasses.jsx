import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
// import useAuth from "./useAuth";

const usePaginationclasses = (currentpage,size) => {
    // const { user } = useAuth()
   
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:Paginationclasses=[] } = useQuery({
   
    queryKey: ["Paginationclasses"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/Paginationclasses?page=${currentpage}&size=${size}`)
        return res.data
      },
  });
  return [Paginationclasses,refetch]
};

export default usePaginationclasses;
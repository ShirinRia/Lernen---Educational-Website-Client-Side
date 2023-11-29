import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxios/useAxiossecure";
// import useAuth from "./useAuth";

const useAllInstructor = () => {
    // const { user } = useAuth()
    const axiossecure = useAxiossecure()
  //tan stack query
  const { refetch, data:instructors=[] } = useQuery({
   
    queryKey: ["instructors"],  // should be unique
    queryFn: async () => {
      
        // console.log(user?.email)
        const res = await axiossecure.get(`/instructors`)
        return res.data
      },
  });
  return [instructors,refetch]
};

export default useAllInstructor;
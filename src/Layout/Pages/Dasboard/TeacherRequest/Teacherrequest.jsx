
import useAllInstructor from "../../../../Hooks/useAllinstructor";
import Teacherrequestdat from "./Teacherrequestdat";




const Teacherrequest = () => {
    const [instructors,refetch] =useAllInstructor();
    return (
        <div>
           <Teacherrequestdat  instructors={instructors} refetch={refetch}></Teacherrequestdat>
            
        </div>
    );
};

export default Teacherrequest;
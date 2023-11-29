
import useAllInstructor from "../../../../Hooks/useAllinstructor";
import useTeacher from "../../../../Hooks/useTeacher";
import Teacherrequestdat from "./Teacherrequestdat";




const Teacherrequest = () => {
    const [instructors,refetch] =useAllInstructor();
    return (
        <div>
           <Teacherrequestdat  instructors={instructors}></Teacherrequestdat>
            
        </div>
    );
};

export default Teacherrequest;
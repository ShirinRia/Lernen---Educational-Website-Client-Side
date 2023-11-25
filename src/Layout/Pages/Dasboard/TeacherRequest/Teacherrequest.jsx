
import useTeacher from "../../../../Hooks/useTeacher";
import Teacherrequestdat from "./Teacherrequestdat";




const Teacherrequest = () => {
    const [instructors,refetch] = useTeacher();
    return (
        <div>
           <Teacherrequestdat  instructors={instructors}></Teacherrequestdat>
            
        </div>
    );
};

export default Teacherrequest;
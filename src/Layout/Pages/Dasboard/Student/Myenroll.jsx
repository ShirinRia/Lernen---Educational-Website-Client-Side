
import useAllclass from "../../../../Hooks/useAllclass";
import Classcard from "../../Allclasses/Classcard";



const Myenroll = () => {
    const [classes,refetch] = useAllclass();
    return (
        <div>
            {
                classes.map(classe=><Classcard key={classe._id} classe={classe}></Classcard>)
            }
        </div>
    );
};

export default Myenroll;
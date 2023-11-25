import useAllclass from "../../../Hooks/useAllclass";
import Classcard from "./Classcard";


const Allclasses = () => {
    const [classes,refetch] = useAllclass();
    return (
        <div>
            {
                classes.map(classe=><Classcard key={classe._id} classe={classe}></Classcard>)
            }
        </div>
    );
};

export default Allclasses;
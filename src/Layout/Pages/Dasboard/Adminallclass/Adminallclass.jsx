import useAllclass from "../../../../Hooks/useAllclass";
import Classdata from "./Classdata";



const Adminallclasses = () => {
    const [classes,refetch] = useAllclass();
    return (
        <div>
           <Classdata  classe={classes} refetch={refetch}></Classdata>
            
        </div>
    );
};

export default Adminallclasses;
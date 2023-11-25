import useAllclass from "../../../../Hooks/useAllclass";
import Classdata from "./Classdata";



const Adminallclasses = () => {
    const [classes,refetch] = useAllclass();
    return (
        <div>
           <Classdata  classe={classes}></Classdata>
            
        </div>
    );
};

export default Adminallclasses;
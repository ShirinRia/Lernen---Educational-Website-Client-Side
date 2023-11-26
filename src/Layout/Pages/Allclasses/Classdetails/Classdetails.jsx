
import { useLoaderData } from "react-router-dom";
import Detailsbanner from "./Detailsbanner";


const Classdetails = () => {
    const specclass=useLoaderData()
  
    // console.log(title)
    return (
        <div>
            <Detailsbanner specclass={specclass}/>
        </div>
    );
};

export default Classdetails;
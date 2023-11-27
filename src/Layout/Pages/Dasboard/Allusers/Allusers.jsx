

import useAllusers from "../../../../Hooks/useAllusers";
import Users from "./Users";



const Allusers = () => {
    const [users,refetch] = useAllusers();
    return (
        <div>
           <Users  users={users}></Users>
            
        </div>
    );
};

export default Allusers;
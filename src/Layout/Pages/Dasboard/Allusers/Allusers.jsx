import useAllclass from "../../../../Hooks/useAllclass";

import Users from "./Users";



const Allusers = () => {
    const [users,refetch] = useAllclass();
    return (
        <div>
           <Users  users={users}></Users>
            
        </div>
    );
};

export default Allusers;
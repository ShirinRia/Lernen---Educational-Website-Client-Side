import { Outlet } from "react-router-dom";
import Appbar from "./Shared/Appbar/Appbar";




const Root = () => {
    return (
        <div >
            <Appbar/>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;
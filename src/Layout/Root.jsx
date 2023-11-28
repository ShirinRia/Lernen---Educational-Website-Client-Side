import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Appbar/Navbar";

const Root = () => {
    return (
        <div >
            <Navbar/>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;
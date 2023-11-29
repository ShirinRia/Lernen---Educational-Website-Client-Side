import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Appbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div >
            <Navbar/>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            {/* <Footer/> */}
        </div>
    );
};

export default Root;
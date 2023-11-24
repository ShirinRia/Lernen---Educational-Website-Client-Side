import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Signup/Signup";
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
           
        ],
    },
]);

export default Routes;
// SwiperJS , React Slick
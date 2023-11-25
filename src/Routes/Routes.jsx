import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Signup/Signup";
import Teachonlernen from "../Layout/Pages/Teach_on_Lernen/Teachonlernen";
import Dashboard from "../Layout/Pages/Dasboard/Dashboard";
import Userprofile from "../Layout/Pages/Dasboard/Userprofile";

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
            
            {
                path: "techon",
                element: <Teachonlernen />,
            },
           
        ],
        
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "profile",
                element: <Userprofile />,
            },
            
           
        ],
        // errorElement: <Errorpage></Errorpage>,
       
        
    },
]);

export default Routes;
// SwiperJS , React Slick
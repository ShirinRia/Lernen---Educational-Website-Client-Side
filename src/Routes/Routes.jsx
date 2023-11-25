import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Signup/Signup";
import Teachonlernen from "../Layout/Pages/Teach_on_Lernen/Teachonlernen";
import Dashboard from "../Layout/Pages/Dasboard/Dashboard";
import Header from "../Layout/Pages/Home/Banner/Header";
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
                path: "header",
                element: <Header />,
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
        // errorElement: <Errorpage></Errorpage>,
       
        
    },
]);

export default Routes;
// SwiperJS , React Slick
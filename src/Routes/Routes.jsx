import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Signup/Signup";
import Teachonlernen from "../Layout/Pages/Teach_on_Lernen/Teachonlernen";
import Dashboard from "../Layout/Pages/Dasboard/Dashboard";
import Userprofile from "../Layout/Pages/Dasboard/Userprofile";
import Addclass from "../Layout/Pages/Dasboard/Addclass";
import Allclasses from "../Layout/Pages/Allclasses/Allclasses";
import Adminallclasses from "../Layout/Pages/Dasboard/Adminallclass/Adminallclass";
import Allusers from "../Layout/Pages/Dasboard/Allusers/Allusers";
import Teacherrequest from "../Layout/Pages/Dasboard/TeacherRequest/Teacherrequest";
import Classdetails from "../Layout/Pages/Allclasses/Classdetails/Classdetails";
import Myenroll from "../Layout/Pages/Dasboard/Student/Myenroll";
import Payment from "../Layout/Pages/Payment/Payment";
import Myclass from "../Layout/Pages/Dasboard/Teacher/Myclass";
import Teacherclassdetails from "../Layout/Pages/Dasboard/Teacher/Teacherclassdetails";
import Myenrollclassdetails from "../Layout/Pages/Dasboard/Student/Myenrollclassdetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader:() =>fetch('/partnership.json'),
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
            {
                path: "allclass",
                element: <Allclasses />,
            },
            {
                path: "details/:id",
                element: <Classdetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`)
            },
            {
                path: "payment/:id",
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`)
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
            {
                path: "addclass",
                element: <Addclass />,
            },
            {
                path: "allclass",
                element: <Adminallclasses />,
            },
            {
                path: "users",
                element: <Allusers />,
            },
            {
                path: "instructors",
                element: <Teacherrequest />,
            },
            {
                path: "enroll",
                element: <Myenroll />,
                // loader: ({ params }) => fetch(`http://localhost:5000/enrolledclass/${params.id}`)
            },
            {
                path: "myenrollclass/:id",
                element: <Myenrollclassdetails />,
                loader: ({params }) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },

            {
                path: "myclass",
                element: <Myclass />,

            },
            {
                path: "myclass/:id",
                element: <Teacherclassdetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/myclass/${params.id}`)
            },

        ],
        // errorElement: <Errorpage></Errorpage>,


    },
]);

export default Routes;
// SwiperJS , React Slick
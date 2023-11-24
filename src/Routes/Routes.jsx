import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";



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
           
           
           
        ],
    },
]);

export default Routes;
// SwiperJS , React Slick
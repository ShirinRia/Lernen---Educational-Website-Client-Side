// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Container, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import useAuth from "../../../Hooks/useAuth";


const Dashboard = () => {
    // const [cart] = useCart();
    // const [isAdmin] = useAdmin()
    const {user}=useAuth()
    const isAdmin = false
    const isStudent = true

   
    return (
        <Container sx={{ display: 'flex'}}>
            {/* dashboard side bar */}
            <Box sx={{ width: '400px', flexGrow: 1, minHeight: '100vh', bgcolor: 'primary.main', color: 'white' }}>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <NavLink to={'/dashboard/instructors'}>
                                {/* <FaHome></FaHome> */}
                                <p style={{ color: 'white' }}>Teacher Request</p>
                            </NavLink>
                            <NavLink to={'/dashboard/users'}>
                                {/* <FaHome></FaHome> */}
                                <p style={{ color: 'white' }}>Users</p>
                            </NavLink>
                            <NavLink to={'/dashboard/allclass'}>
                                {/* <FaHome></FaHome> */}
                                <p style={{ color: 'white' }}>All classes</p>
                            </NavLink>
                            <NavLink to={'/dashboard/profile'}>
                                {/* <FaHome></FaHome> */}
                                <p style={{ color: 'white' }}>Profile</p>
                            </NavLink>

                        </>
                            : <>
                                {isStudent ?

                                    <>

                                        <NavLink >
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>Home</p>
                                        </NavLink>
                                        <NavLink to={`/dashboard/enroll/`}>
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>My enroll class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/profile'}>
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>Profile</p>
                                        </NavLink>


                                    </>
                                    : <>

                                        <NavLink to={'/dashboard/addclass'}>
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>Add Class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/myclass'}>
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>My Class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/profile'}>
                                            {/* <FaHome></FaHome> */}
                                            <p style={{ color: 'white' }}>Profile</p>
                                        </NavLink>
                                    </>
                                }
                            </>


                    }

                    <Divider sx={{ bgcolor: 'white' }} />
                    <li>
                        <NavLink to="/" style={{ color: 'white' }}>
                            {/* <FaHome></FaHome> */}
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" style={{ color: 'white' }}>
                            {/* <FaSearch></FaSearch> */}
                            Menu</NavLink>
                    </li>
                </ul>
            </Box>
            {/* dashboard content */}
            <Box sx={{ p: 8, flexGrow: 1, border: 1, width: '100%' }}>
                <Outlet></Outlet>
            </Box>
        </Container>
    );
};

export default Dashboard;
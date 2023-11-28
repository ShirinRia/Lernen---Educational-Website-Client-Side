// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Container, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import useStudent from "../../../Hooks/useStudent";


const Dashboard = () => {
   
    // const isAdmin = false
    // const isStudent=false
    const {user}=useAuth()
    const [isAdmin] = useAdmin()
    const [isStudent] = useStudent()
    console.log(isStudent)
console.log(isAdmin,isStudent)
   
    return (
        <Container sx={{ display: 'flex'}}>
            {/* dashboard side bar */}
            <Box sx={{  minWidth:'250px', minHeight: '100vh', bgcolor: 'primary.main', color: 'white' }}>
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

                    <Divider sx={{ bgcolor: 'white',mr:2,mb:2 }} />
                   
                      <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
                      <NavLink to="/" style={{ color: 'white' }}>
                            {/* <FaHome></FaHome> */}
                            Home</NavLink>
                    
                   
                        <NavLink to="/order/salad" style={{ color: 'white' }}>
                            {/* <FaSearch></FaSearch> */}
                            Menu</NavLink></Box>  
                   
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
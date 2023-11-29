// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Container, Divider } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { IoLogOutOutline } from "react-icons/io5";
import useAdmin from "../../../Hooks/useAdmin";
import useStudent from "../../../Hooks/useStudent";
import './Dashboard.css'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { RiProfileFill } from "react-icons/ri";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const Dashboard = () => {
    const { logout } = useAuth()
    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    // const isAdmin = false
    // const isStudent=false
    // const {user}=useAuth()
    const [isAdmin] = useAdmin()
    const [isStudent] = useStudent()
    console.log(isStudent)
    console.log(isAdmin, isStudent)

    return (
        <Container maxWidth='xl' sx={{ display: 'flex' }}>
            {/* dashboard side bar */}
            <Box sx={{ minWidth: '250px', minHeight: '100vh', bgcolor: grey[600], color: 'white' }}>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <NavLink to={'/'} >

                                <p style={{ color: 'white' }}> <FaHome></FaHome> Home</p>
                            </NavLink>
                            <NavLink to={'/dashboard/instructors'} >

                                <p style={{ color: 'white' }}><LiaChalkboardTeacherSolid /> Teacher Request</p>
                            </NavLink>
                            <NavLink to={'/dashboard/users'} >

                                <p style={{ color: 'white' }}><FaUsers /> Users</p>
                            </NavLink>
                            <NavLink to={'/dashboard/allclass'} >

                                <p style={{ color: 'white' }}><SiGoogleclassroom /> All classes</p>
                            </NavLink>
                            <NavLink to={'/dashboard/profile'} >
                                <p style={{ color: 'white' }}><RiProfileFill /> Profile</p>
                            </NavLink>

                        </>
                            : <>
                                {isStudent ?

                                    <>
                                        <NavLink to={`/`} >
                                            <p style={{ color: 'white' }}> <FaHome></FaHome> Home</p>
                                        </NavLink>
                                        <NavLink to={`/dashboard/enroll/`} >
                                            <p style={{ color: 'white' }}><SiGoogleclassroom /> My enroll class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/profile'} >
                                            <p style={{ color: 'white' }}><RiProfileFill /> Profile</p>
                                        </NavLink>
                                    </>
                                    : <>
                                        <NavLink to={'/'} >

                                            <p style={{ color: 'white' }}> <FaHome></FaHome> Home</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/addclass'} >

                                            <p style={{ color: 'white' }}><MdAddBox /> Add Class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/myclass'} >

                                            <p style={{ color: 'white' }}><SiGoogleclassroom /> My Class</p>
                                        </NavLink>
                                        <NavLink to={'/dashboard/profile'} >
                                            <p style={{ color: 'white' }}><RiProfileFill /> Profile</p>
                                        </NavLink>
                                    </>
                                }
                            </>
                    }
                    <Divider sx={{ bgcolor: 'white', mr: 2, mb: 2 }} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <NavLink to="/" onClick={handlelogout} style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                            <IoLogOutOutline />
                            Logout </NavLink>

                    </Box>

                </ul>
            </Box>
            {/* dashboard content */}
            <Box sx={{ py: 4, px: 8, flexGrow: 1, width: '100%' }}>
                <Outlet></Outlet>
            </Box>
        </Container>
    );
};

export default Dashboard;
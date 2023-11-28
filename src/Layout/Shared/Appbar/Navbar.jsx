
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import useAuth from '../../../Hooks/useAuth';
import './Navbar.css'


const Navbar = () => {
  const { user, logout } = useAuth()
  const handlelogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const pages = <>
    <NavLink style={{mr:'4px'}} to={'/'}>Home</NavLink>
    <NavLink style={{mr:'4px'}} to={'/allclass'}>All Classes</NavLink>
    <NavLink style={{mr:'4px'}} to={'/techon'}>Tech on Lernen</NavLink>

    {/* {user &&
    <>
        <li className="font-medium"><NavLink to={'/addfood'}>Add Food</NavLink></li>
        <li className="font-medium"><NavLink to={'/managefood'}>Manage My Foods</NavLink></li>
        <li className="font-medium"><NavLink to={'/foodrequest'}>My Food Request</NavLink></li>


    </>} */}
  </>

  const settings = <>
    {user &&
      <li>{user.displayName}</li>
    }

    <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    <li> <NavLink onClick={handlelogout} to={"/login"} className="hidden lg:block  btn hover:text-white hover:bg-[#e879f9] py-4">Log Out</NavLink></li>
  </>;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={logo} alt="logo" height={'80'} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LERNEN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='white'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'white',
              }}
            >
              {pages}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logo} alt="logo" height={'80'} />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LERNEN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'Secondary' }}>
            {pages}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ?
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.photoURL} />
                </IconButton>
              </Tooltip>

              :
              <Link to={'/login'} className="left-0 hidden lg:block  py-2 font-semibold rounded  dark:bg-violet-400 dark:text-gray-900"> Log in </Link>

            }

            <div>

              <Menu
                sx={{ mt: '45px' }}
               
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings}
              </Menu>
            </div>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
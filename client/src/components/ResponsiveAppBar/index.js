import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { color } from '@mui/system';
import styles from './nav.module.css';
import Auth from '../../utils/auth';


const pages = [
    { name: "View Recipes", link: "/recipes"}, 
    { name: "About", link: "/about"}, 
];

let settings = [];


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    if (!Auth.loggedIn()) {
        settings = [
        { name: 'Login', link: "/login" },
        { name: 'Sign Up', link: "/signup" },
      ]
        } else {
            settings = [
                { name: 'Profile', link: "/profile" },
                { name: 'Dashboard', link: "/dashboard" },
            ];
        };

     // logout handler
     const handleLogout = (e) => {
        console.log('logging out');
        Auth.logout();
    };

    return (
        <div className={styles.appbar}>
        <AppBar
            position="fixed"
            elevation={0}
            style={{
                backgroundColor: "transparent",
                color: "red",
                
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link to="/" className={styles.title}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >
                            A Dish A Day
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            }}
                        >
                            {pages.map((page) => (
                                    <MenuItem key={page.name} className={styles.dropdown} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link} to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 3, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
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
                            {settings.map((setting) => (
                                <MenuItem className={styles.dropdown} key={setting.name} component={Link} to={setting.link} onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            ))}
                            {/* CONDITIONALLY RENDER LOGOUT OPTION */}
                            {Auth.loggedIn() ? 
                                ( <MenuItem key='logout' onClick={handleLogout} className={styles.dropdown}
                                >
                                <Typography
                                textAlign="center"
                                >
                                Logout</Typography>
                                </MenuItem> ) : ''
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </div>
    );
};

export default ResponsiveAppBar;

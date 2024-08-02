import { AppBar, Button, IconButton, Toolbar, Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, Container } from '@mui/material'
import React from 'react'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const HeaderData = [
        { name: 'Home', href: '/home' },
        { name: 'Doctors', href: '/doctors' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },
    ]

    //* for setting drawer 
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    //* appbar in mobile devices
    const drawer = (
        <Box pb={3} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Ayman Ibrahim
            </Typography>
            <Divider />
            <List>
                {HeaderData.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={item.href} style={{ color: 'black', textDecoration: 'none', width: '100%' }}>
                            <ListItem
                                button
                                sx={{ textAlign: 'center', color: 'inherit' }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    </ListItem>
                ))}
            </List>

        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='primary' position="static" sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px' }}>
                <Toolbar sx={{ paddingLeft: { md: '0px' }, }}>
                    <Button sx={{ flexGrow: '1', display: { xs: 'flex', md: 'none' } }} onClick={handleDrawerToggle}>
                        <ViewStreamIcon color='warning' sx={{ color: 'black' }} />
                    </Button>
                    <Container>
                        <Box display={'flex'} flexDirection={"row"} flexGrow={'1'} gap={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {HeaderData.map((el, index) => (
                                <Link key={index} to={el.href} style={{ textDecoration: 'none', }}>
                                    <Button sx={{ color: 'white' }}>
                                        {el.name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>

            {/* nav for mobile devices show only in xs to md screen */}
            <nav>
                <Drawer
                    // container={container}
                    anchor={'top'}
                    variant='temporary' //temporary means any click anywhere will be removed automatically
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Header

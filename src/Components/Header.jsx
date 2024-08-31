import { AppBar, Button, IconButton, Toolbar, Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, Container, Grid, Menu, MenuItem, styled } from '@mui/material'
import React from 'react'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../public/images/logo.png'
import logoWhite from '../../public/images/logo-white.png'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';



const Header = () => {
    // menu lang 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t, i18n } = useTranslation();

    const HeaderData = t('HeaderData', { returnObjects: true })
    //* for setting drawer 
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const currentLang = i18n.language;

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
        <Box sx={{ flexGrow: 1, background: 'rgb(240 254 255)' }}>
            <Container>
                <Box sx={{ display: { xs: 'none', lg: 'flex' } }} >
                    <Grid container sx={{ dispaly: { xs: 'none', lg: 'flex' } }} alignItems={'center'}>
                        <Grid item md={4}>
                            <img style={{ width: '300px' }} src={logo} alt='logo' />
                        </Grid>
                        <Grid item md={2.5}>
                            <Box display={'flex'} alignItems={'center'} gap={1} >
                                <LocationOnTwoToneIcon fontSize="large" color='secondary' />
                                <Box display='flex' flexDirection={'column'} alignItems={'start'} justifyContent={'center'}>
                                    <Typography display={'inline-block'} variant={'body2'} color={'grayText'}>{currentLang === 'en' ? 'Addresses:' : 'العنوان:'}</Typography>
                                    <Typography variant={'body2'} fontWeight={'bold'}>{currentLang === 'en' ? 'al maleya street' : 'الموصل / مدخل حي المالية'}</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={3}>
                            <Box display={'flex'} alignItems={'center'} gap={1} >
                                <LocalPhoneTwoToneIcon fontSize="large" color='secondary' />
                                <Box display='flex' flexDirection={'column'} alignItems={'start'} justifyContent={'center'}>
                                    <Typography display={'inline-block'} variant={'body2'} color={'grayText'}>{currentLang === 'en' ? 'Phone:' : 'الهاتف:'}</Typography>
                                    <Typography variant={'body2'} fontWeight={'bold'}>07705547776 | 07705587776 <br /> 07501847776 | 07501857776</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={2.5}>
                            <Box display={'flex'} alignItems={'center'} gap={1} >
                                <MailTwoToneIcon fontSize="large" color='secondary' />
                                <Box display='flex' flexDirection={'column'} alignItems={'start'} justifyContent={'center'}>
                                    <Typography display={'inline-block'} variant={'body2'} color={'grayText'}>{currentLang === 'en' ? 'Mail:' : 'البريد الإلكتروني:'}</Typography>
                                    <Typography variant={'body2'} fontWeight={'bold'} >info@almadina-hospital.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <AppBar color='primary' position="static" sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px' }}>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>


                    <Toolbar sx={{ paddingLeft: { md: '0px' }, }}>
                        <Container>
                            <Box sx={{ flexGrow: '1', display: { xs: 'flex', md: 'none' } }}>
                                <img style={{ width: '300px' }} src={logoWhite} alt='logo' />
                            </Box>
                            <Box display='flex'>
                                <Box display={'flex'} flexDirection={"row"} flexGrow={'1'} gap={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    {HeaderData.map((el, index) => (
                                        <Link key={index} to={el.href} style={{ textDecoration: 'none', }}>
                                            <Button size='large' sx={{ color: 'white' }} >
                                                {el.name}
                                            </Button>
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Container>
                    </Toolbar>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, height:'fit-content' }}>
                        <Button
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color='info'
                            endIcon={<LanguageTwoToneIcon sx={{margin: currentLang === "en" ? '0' : '0 10px 0 0'}}/>}>
                            {currentLang === 'en' ? "english" : 'arbic'}</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                            <MenuItem onClick={() => { i18n.changeLanguage('en'); handleClose() }}>Engilsh</MenuItem>
                            <MenuItem onClick={() => { i18n.changeLanguage('ar'); handleClose() }}>Arabic</MenuItem>
                        </Menu>
                    </Box>
                    <Button sx={{ flexGrow: '1', display: { xs: 'flex', md: 'none' } }} onClick={handleDrawerToggle}>
                        <ViewStreamIcon color='info' />
                    </Button>
                </Box>
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

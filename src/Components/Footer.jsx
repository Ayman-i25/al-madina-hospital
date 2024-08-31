import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'
import { Box, Container, Grid, Typography, Menu, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';

const Footer = () => {
    // mune lang 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme().palette;

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    // doctors Data
    const headerData = t('HeaderData', { returnObjects: true })
    const servicesData = t('footer.services', { returnObjects: true })
    return (
        <Box pt={'100px'} pb={'50px'} sx={{ background: theme.primary.main }}>
            <Container>

                <Grid container spacing={6}>
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='black' fontWeight={'bolder'} variant='h5'>{currentLanguage === 'en' ? 'Contact Info' : 'معلومات التواصل'}</Typography>
                        <Typography sx={{ mt: '16px', mb: '20px' }} color='white'>{currentLanguage === 'en' ? 'Rapidiously seize wireless strategic theme areas and corporate testing procedures. Uniquely' : 'بسرعة اغتنم المجالات الاستراتيجية اللاسلكية وإجراءات اختبار الشركات. بشكل فريد.'}</Typography>
                        <Box my={1} display={'flex'} alignItems={'center'} gap={1}><HomeIcon sx={{ color: theme.secondary.main }} /> <Typography color={'white'} variant={'body2'}> {currentLanguage === 'en' ? ' Suite 02 New Elephant Road usa' : 'الموصل , مدخل حي المالية'}</Typography></Box>
                        <Box my={1} display={'flex'} alignItems={'center'} gap={1}><CallIcon sx={{ color: theme.secondary.main }} /> <Typography color={'white'} variant={'body2'}> 07705547776 | 07705587776 <br /> 07501847776 | 07501857776</Typography></Box>
                        <Box my={1} display={'flex'} alignItems={'center'} gap={1}><MailIcon sx={{ color: theme.secondary.main }} /> <Typography color={'white'} variant={'body2'}><a src=''>almadinahospital20@gmail.com</a></Typography></Box>
                        <Box my={1} display={'flex'} alignItems={'center'} gap={1}><LanguageIcon sx={{ color: theme.secondary.main }} /> <Typography color={'white'} variant={'body2'}>www.almadinaHospital.com</Typography></Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='black' fontWeight={'bolder'} variant='h5'>{currentLanguage === 'en' ? 'Quick Links' : 'الأقسام'}</Typography>
                        {headerData.map((ele, index) => (
                            <Typography key={index} sx={{ my: 3, transition: '.2s all', '&:hover': { transform: currentLanguage === 'en' ? 'translateX(15px)' : 'translateX(-15px)' } }} variant="button" component="div" display='flex' alignItems={'center'}>
                                {currentLanguage === 'en' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                                <Link style={{ color: 'white', textDecoration: 'none', padding: '0 8px' }} to={ele.href}>{ele.name}</Link>
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='black' fontWeight={'bolder'} variant='h5'>{currentLanguage === 'en' ? 'Services' : 'الخدمات'}</Typography>
                        {servicesData.map((ele, index) => (
                            (index < 6 &&
                                <Typography key={index} sx={{ mt: 2, mb: 2, transition: '.2s all', '&:hover': { transform: currentLanguage === 'en' ? 'translateX(15px)' : 'translateX(-15px)' } }} variant="button" component="div" display='flex' alignItems={'center'}>
                                    {currentLanguage === 'en' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                                    <Link style={{ color: 'white', textDecoration: 'none', padding: '0 8px' }} to={ele.href}>{ele.name}</Link>
                                </Typography>
                            )
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='black' fontWeight={'bolder'} variant='h5'>{currentLanguage === 'en' ? 'Services' : 'الخدمات'}</Typography>
                        {servicesData.map((ele, index) => (
                            (index > 5 &&
                                <Typography key={index} sx={{ mt: 2, mb: 2, transition: '.2s all', '&:hover': { transform: currentLanguage === 'en' ? 'translateX(15px)' : 'translateX(-15px)' } }} variant="button" component="div" display='flex' alignItems={'center'}>
                                    {currentLanguage === 'en' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                                    <Link style={{ color: 'white', textDecoration: 'none', padding: '0 8px' }} to={ele.href}>{ele.name}</Link>
                                </Typography>
                            )
                        ))}
                    </Grid>

                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <Typography variant={'body1'}>Copyright © 2024 <Link to='' style={{ color: theme.secondary.main, textDecoration: 'none', padding: '0 8px' }}>Almadina-hospital</Link>-  All rights reserved </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
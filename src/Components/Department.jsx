import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import Title from './Title';

import { motion } from "framer-motion"
import Btn from './Btn';

const Department = () => {


    // theme for the color
    const theme = useTheme().palette;
    // translation thing
    const { t, i18n } = useTranslation()
    // array of department
    const department = t('departmentGrid', { returnObjects: true })
    // current lang 
    const currentLanguage = i18n.language;
    return (
        <>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box py={'100px'} bgcolor={'#d0f1f3'}>
                    <Title title={t('departmentHeader.title')} subtitle={t('departmentHeader.description')} />
                    <Container>
                        <Grid container sx={{ padding: { xs: '0', md: '0 60px', lg: '0' } }} flexWrap={'wrap'}>

                            <Grid item xs={12} md={12} lg={6}>
                                <Box sx={{ height: '300px' }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={department.boxOne.image} alt='pic' />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <Box p={5} sx={{ height: '100%', bgcolor: 'white' }}>
                                    <Typography variant='h5' fontWeight={'bold'}>{department.boxOne.title}</Typography>
                                    <Typography variant='body1' color='GrayText' pt={2} pb={3} sx={{ borderRadius: '0px' }}>{department.boxOne.description}</Typography>
                                    <Btn size='large' vari={'contained'} color='secondary' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3} >
                                <Box py={5} px={3} sx={{
                                    backgroundImage: `url(${department.boxTwo.image})`,
                                    backgroundSize: 'cover',
                                    color: 'white',
                                    position: 'relative',
                                    // Pseudo-element styling for overlay
                                    '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '0px',
                                        left: '0px',
                                        background: 'black',
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0.5,
                                        zIndex: 1,
                                    },
                                    '& > *': {
                                        position: 'relative',
                                        zIndex: 2,
                                    }
                                }}>
                                    <Typography variant='h5' fontWeight={'bold'}>{department.boxTwo.title}</Typography>
                                    <Typography variant='body1' pt={1} pb={3} sx={{ borderRadius: '0px' }}>{department.boxTwo.description}</Typography>
                                    <Btn size='small' vari={'contained'} color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3} py={5} px={3} sx={{ bgcolor: '#095257', color: 'white' }}>
                                <Typography variant='h5' fontWeight={'bold'}>{department.boxThree.title}</Typography>
                                <Typography variant='body1' pt={1} pb={3} sx={{ borderRadius: '0px' }}>{department.boxThree.description}</Typography>
                                <Btn size='small' vari={'contained'} color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3} sx={{order: { xs: 7, lg: 0 }}}>
                                <Box py={5} px={3} sx={{
                                    backgroundImage: `url(${department.boxFour.image})`,
                                    backgroundSize: 'cover',
                                    color: 'white',
                                    position: 'relative',
                                    // Pseudo-element styling for overlay
                                    '&::before': {
                                        position: 'absolute',
                                        content: '""',
                                        top: '0px',
                                        left: '0px',
                                        background: 'black',
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0.5,
                                        zIndex: 1,
                                    },
                                    '& > *': {
                                        position: 'relative',
                                        zIndex: 2,
                                    }
                                }}>
                                    <Typography variant='h5' fontWeight={'bold'}>{department.boxFour.title}</Typography>
                                    <Typography variant='body1' pt={1} pb={3} sx={{ borderRadius: '0px' }}>{department.boxFour.description}</Typography>
                                    <Btn size='small' vari={'contained'} color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={3} py={5} px={3} sx={{ bgcolor: '#32ced9', color: 'white',order: { xs: 8, lg: 0 } }}>
                                <Typography variant='h5' fontWeight={'bold'}>{department.boxFive.title}</Typography>
                                <Typography variant='body1' pt={1} pb={3} sx={{ borderRadius: '0px' }}>{department.boxFive.description}</Typography>
                                <Btn size='small' vari={'contained'} color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} sx={{order: { xs: 6, lg: 0 }}}>
                                <Box p={5} sx={{ bgcolor: 'white', height: '300px' }}>
                                    <Typography variant='h5' fontWeight={'bold'}>{department.boxSix.title}</Typography>
                                    <Typography variant='body1' color='GrayText' pt={1} pb={3} sx={{ borderRadius: '0px' }}>{department.boxSix.description}</Typography>
                                    <Btn size='large' vari={'contained'} color='secondary' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} >
                                <Box sx={{ height: '300px' }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={department.boxSix.image} alt='pic' />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} mt={3} pt={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Btn vari="contained" size='large' color='secondary' title={currentLanguage === 'en' ? 'View All' : 'المزيد'} href="/departments" />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box >
        </>
    )
}

export default Department
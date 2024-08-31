import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Title from '../../Components/Title';
import Btn from '../../Components/Btn';

const DepartmentsPage = () => {
    // translation thing
    const { t, i18n } = useTranslation();
    // array of departments
    const department = t('departmentPage', { returnObjects: true });
    // current lang
    const currentLanguage = i18n.language;

    return (
        <>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Box py={'100px'} bgcolor={'#d0f1f3'}>
                    <Title title={t('serviceHeader.title')} subtitle={t('serviceHeader.description')} />
                    <Container>
                        <Grid container spacing={3} >
                            {department.map((ele, index) => (
                                <Grid 
                                    container 
                                    item 
                                    xs={12} 
                                    md={12} 
                                    lg={12} 
                                    key={ele.id} 
                                    sx={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
                                >
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{ height: '300px' }}>
                                            <img 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                src={ele.image} 
                                                alt={ele.title}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box p={5} sx={{ height: '100%', bgcolor: 'white' }}>
                                            <Typography variant='h5' fontWeight={'bold'}>{ele.title}</Typography>
                                            <Typography variant='body1' color='GrayText' pt={2} pb={3}>
                                                {ele.description.slice(0,300)}...
                                            </Typography>
                                            <Btn 
                                                href={`/departments/${ele.id}`}
                                                size='large' 
                                                vari={'contained'} 
                                                color='secondary' 
                                                title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} 
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default DepartmentsPage;

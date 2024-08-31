import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import Title from '../../Components/Title'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

const Doctors = () => {
    const theme = useTheme().palette
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language;
    const doctors = t('DoctorsSection', { returnObjects: true });

    return (
        <Box py={'100px'}>
            <Title subtitle={currentLanguage === 'en' ? 'Doctors' : 'الاطباء'} />
            <Container>
                <Grid container spacing={3}>
                    {doctors.map((ele, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={ele.id}>
                            <Link to={`/doctors/${ele.id}`} style={{ textDecoration: 'none' }}>
                                <Card sx={{ background: '#b0cfd1', color: 'white', borderRadius: '0px', cursor: 'pointer', boxShadow: 'none', transition: '.3s all', '&:hover': { boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', transform: 'translateY(-10px)' } }}>
                                    <CardMedia sx={{ height: 240 }}
                                        image={ele.thumbnail}
                                        title={ele.name}/>
                                    <CardContent sx={{ paddingBottom: '0px', minHeight: '120px', background:theme.primary.main , minHeight:'150px'}}>
                                        <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
                                            {ele.name.length > 15 ? ele.name.slice(0, 19) + '...' : ele.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {ele.specialization.length > 80 ? ele.specialization.slice(0, 80) + '...' : ele.specialization}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                    <Btn color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                    </CardActions> */}
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Doctors
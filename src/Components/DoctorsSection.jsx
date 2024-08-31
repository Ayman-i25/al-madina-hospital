import { Container, Grid, Card, CardMedia, CardContent, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"
import Btn from './Btn'
const DoctorsSection = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language;
    const theme = useTheme().palette
    // arry of the doctors section from json files
    const doctors = t('DoctorsSection', { returnObjects: true });
    return (
        <Container>
            <Grid container spacing={3}>
                {doctors.map((ele, index) => (
                    index < 8 && (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={ele.id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: .9, delay: index * 0.5 }}
                            >
                                <Link to={`/doctors/${ele.id}`} style={{ textDecoration: 'none' }}>
                                    <Card sx={{ background: '#b0cfd1', color: 'white', borderRadius: '0px', cursor: 'pointer', boxShadow: 'none', transition: '.3s all', '&:hover': { boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', transform: 'translateY(-10px)' } }}>
                                        <CardMedia sx={{ height: 240 }}
                                            image={ele.thumbnail}
                                            title={ele.name}
                                        />
                                        <CardContent sx={{ paddingBottom: '0px', minHeight: '140px', background:theme.primary.main  }}>
                                            <Typography gutterBottom variant="h6" fontWeight={'bold'} component="div">
                                            {ele.name.length > 15 ? ele.name.slice(0, 19) + '...' : ele.name}
                                            </Typography>
                                            <Typography variant="body2" >
                                            {ele.specialization.length > 80 ? ele.specialization.slice(0, 80) + '...' : ele.specialization}
                                            </Typography>
                                        </CardContent>
                                        {/* <CardActions>
                    <Btn color='info' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                    </CardActions> */}
                                    </Card>
                                </Link>
                            </motion.div>
                        </Grid>
                    )))}
                <Grid item xs={12} mt={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Btn href='/doctors' vari="contained" size='large' color='secondary' title={currentLanguage === 'en' ? 'View All Doctors' : 'مشاهدة المزيد'} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DoctorsSection
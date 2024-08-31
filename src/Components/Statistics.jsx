import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Input, TextField, Typography, useTheme } from '@mui/material'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import st1 from '../../public/images/st (4).png'
import st2 from '../../public/images/st (1).png'
import st3 from '../../public/images/st (2).png'
import st4 from '../../public/images/st (3).png'
import { useTranslation } from 'react-i18next';
const Statistics = () => {
    const theme = useTheme().palette;
    const {t,i18n} = useTranslation()
    const currentLanguage = i18n.language
    // couter
    const [count, setCount] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            <Box p={'50px'} py={'60px'} sx={{ background: theme.primary.main }}>
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display={'flex'} alignItems={"center"} justifyContent={'center'}>
                                <img src={st1} alt='pic' />
                                <Box display={'flex'} alignItems={"start"} justifyContent={'center'} flexDirection={'column'} px={3}>
                                    <Typography variant='h4' fontWeight={'bolder'} sx={{ color: 'white' }}>{count && <CountUp start={0} end={500} duration={2} delay={0} />} +</Typography>
                                    <Typography variant='body1' sx={{ color: 'white' }}>{currentLanguage === 'en' ? "Operations" : 'العمليات'}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display={'flex'} alignItems={"center"} justifyContent={'center'}>
                                <img src={st2} alt='pic' />
                                <Box display={'flex'} alignItems={"start"} justifyContent={'center'} flexDirection={'column'} px={3}>
                                    <Typography variant='h4' fontWeight={'bolder'} sx={{ color: 'white' }}>{count && <CountUp start={0} end={400} duration={2} delay={0} />} +</Typography>
                                    <Typography variant='body1' sx={{ color: 'white' }}>{currentLanguage === 'en' ? 'Qualified Doctors' : 'الأطباء'}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display={'flex'} alignItems={"center"} justifyContent={'center'}>
                                <img src={st3} alt='pic' />
                                <Box display={'flex'} alignItems={"start"} justifyContent={'center'} flexDirection={'column'} px={3}>
                                    <Typography variant='h4' fontWeight={'bolder'} sx={{ color: 'white' }}>{count && <CountUp start={0} end={13} duration={2} delay={0} />} +</Typography>
                                    <Typography variant='body1' sx={{ color: 'white' }}>{currentLanguage === 'en' ? 'Years Experience' : 'سنوات الخبرة'}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box display={'flex'} alignItems={"center"} justifyContent={'center'}>
                                <img src={st4} alt='pic' />
                                <Box display={'flex'} alignItems={"start"} justifyContent={'center'} flexDirection={'column'} px={3}>
                                    <Typography variant='h4' fontWeight={'bolder'} sx={{ color: 'white' }}>{count && <CountUp start={0} end={350} duration={2} delay={0} />} +</Typography>
                                    <Typography variant='body1' sx={{ color: 'white' }}>{currentLanguage === 'en' ? 'Patients Every Day' : 'المرضى اليوميين'}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ScrollTrigger>
    )
}

export default Statistics
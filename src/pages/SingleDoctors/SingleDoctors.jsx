import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Divider } from '@mui/material'
import React from 'react'
import Title from '../../Components/Title'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@emotion/react'
import { useParams } from 'react-router-dom'
import Statistics from '../../Components/Statistics'
import DoctorsSection from '../../Components/DoctorsSection'
import pattren from '../../assets/plus-01.png'
const SingleDoctors = () => {
  const theme = useTheme().palette
  const { t, i18n } = useTranslation()
  const location = useParams()
  const currentLanguage = i18n.language;
  const doctor = t(`DoctorsSection.${location.doctorId - 1}`, { returnObjects: true });

  return (
    <Box py={'100px'} position={'relative'} overflow={'hidden'}>
      {/* <Title subtitle= {currentLanguage === 'en' ? 'Doctors' : 'الاطباء'} /> */}
      <Box sx={{display:{xs:'none', lg:'block'}}}>
          <img src={pattren} alt='pic' style={{position:'absolute', top:'0', left:'0', zIndex:'-1'}}/>
          </Box>
      <Container>
        <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', zIndex: 4 }}>
          <Grid container >
            <Grid item xs={12} md={6} p={4} sx={{ background: 'white' }}>
              <Typography fontWeight='bold' fontSize={'30px'}>{doctor.name}</Typography>
              <Typography variant='body2' color="grayText">Chief of Medicine</Typography>
              <Typography variant='body1' fontSize={'18px'} color="gray" mt={3} mb={5}>{doctor.specialization}</Typography>
              <Box display={'flex'} flexDirection={'column'} gap={2}>

                <Box display="flex" flexDirection={'row'} alignItems={'center'}>
                  <Typography variant='body1' fontWeight={'bold'} color="grayText" minWidth={'120px'}>{currentLanguage === 'en' ? 'WorkTime' : 'اوقات العمل'}</Typography>
                  <span style={{ padding: '0 13px', fontWeight: 'bold' }}>:</span>
                  <Typography variant='body1' fontWeight={'bold'} >  {doctor.workTime}</Typography>
                </Box>
                <Divider />
                <Box display="flex" flexDirection={'row'} alignItems={'center'}>
                  <Typography variant='body1' fontWeight={'bold'} color="grayText" minWidth={'120px'}>{currentLanguage === 'en' ? 'Phone' : 'رقم الحجز'}</Typography>
                  <span style={{ padding: '0 13px', fontWeight: 'bold' }}>:</span>
                  <Typography variant='body1' fontWeight={'bold'} >  {doctor.contactNumber}</Typography>
                </Box>
                <Divider />
                <Box display="flex" flexDirection={'row'} alignItems={'center'}>
                  <Typography variant='body1' fontWeight={'bold'} color="grayText" minWidth={'120px'}>{currentLanguage === 'en' ? 'Email' : 'الايميل'}</Typography>
                  <span style={{ padding: '0 13px', fontWeight: 'bold' }}>:</span>
                  <Typography variant='body1' fontWeight={'bold'}  >info@almadina-hospital.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box height={'440px'} sx={{background: '#b0cfd1'}}>
                <img style={{ width: '100%', height: '100%', objectFit:'cover' }} src={doctor.image} loading='lazy' alt='pic' />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box pb={6} sx={{ zIndex: 1, marginTop: '-30px' }}>
        <Statistics />
      </Box>

      <Title subtitle={currentLanguage === 'en' ? 'Other doctors' : 'اطباء اخرون'} />
      <DoctorsSection />
    </Box>
  )
}

export default SingleDoctors
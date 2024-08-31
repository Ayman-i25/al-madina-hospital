import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Input, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Title from '../../Components/Title';
import st2 from '../../../public/images/st (1).png'
import st1 from '../../../public/images/st (4).png'
import st3 from '../../../public/images/st (2).png'
import st4 from '../../../public/images/st (3).png'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { AnimatePresence, motion } from "framer-motion"
import Btn from '../../Components/Btn';
import CustomizedAccordions from '../../Components/accordion';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import img1 from '../../../public/images/emergency (1).png'
import img2 from '../../../public/images/emergency (4).png'
import img3 from '../../../public/images/vip-room (4).png'
import img4 from '../../../public/images/laporatory (5).png'
import Department from '../../Components/Department';
import { Link } from 'react-router-dom';
import Statistics from '../../Components/Statistics';
import DoctorsSection from '../../Components/DoctorsSection';
import Contact from '../../Components/Contact';
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
const Home = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "YOUR_API_KEY"
  // })
  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
  // ref for the animation
  const ref = useRef(null)

  // theme for the color
  const theme = useTheme().palette;
  // translation thing
  const { t, i18n } = useTranslation()
  // arry of the services section from json files
  const cards = t('serviceCards', { returnObjects: true });

  // array of department
  const department = t('departmentGrid', { returnObjects: true })
  // accordion data
  const accordion = t('homeAccordion', { returnObjects: true });
  // current lang 
  const currentLanguage = i18n.language;
  // landing image 
  const images = [img1, img2, img3]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, 5000]);
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
        <AnimatePresence>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.img
                key={image}
                src={image}
                alt={'lll'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ width: '100%', height: '100vh', position: 'absolute', objectFit: 'cover' }}
              />
            )
          ))}
        </AnimatePresence>
      </Box>
      <Box display={'flex'} justifyContent={'center'} >
        <Container>
          <Box sx={{ position: 'relative', width: { sm: 'auto', md: '500px', zIndex: '1000' } }} minHeight={"100vh"} alignContent={'center'}>
            <Typography mb={2} variant='h3' fontWeight={'bold'} p={2} sx={{background:'white', borderRadius:'5px'}}><span>{t('bannerText.title')} <span style={{ color: theme.primary.main, fontSize: '55px' }}>{t('bannerText.subtitleColor')} </span>{t('bannerText.subtitle')}</span></Typography>
            <Btn href='/departments' size='large' vari={'contained'} color='primary' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
          </Box>
        </Container>
      </Box>

      {/* Servics-Section */}
      <Box ref={ref} py={'100px'} bgcolor={'#d0f1f3'} sx={{ overflow: 'hidden' }}>
        <Title title={t('serviceHeader.title')} subtitle={t('serviceHeader.description')} />
        <Container>
          <Grid container spacing={3}>
            {cards.map((ele, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ x: index === 0 || index === 1 ? -300 : 300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: .7 }}
                  viewport={{ root: ref.current }}
                >
                  <Card  sx={{minHeight:'300px' ,boxShadow: 'none', p: 2, transition: '.3s all', '&:hover': { boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', transform: 'translateY(-10px)' }}}>
                    <CardMedia sx={{ height: 80, width: '100%', textAlign: 'center', padding: '10px' }}>
                      <img style={{ width: '120px' }} src={ele.image} alt={ele.title} />
                    </CardMedia>
                    <CardContent sx={{ paddingBottom: '0px' }}>
                      <Typography gutterBottom variant="h6" py={2} fontWeight={'bold'} component="div">
                        {ele.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {ele.description}
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Btn color='secondary' title={currentLanguage === 'en' ? 'Read More' : 'اقرا المزيد'} />
                    </CardActions> */}
                  </Card>
                </motion.div>
              </Grid>
            )
            )}
          </Grid>
        </Container>
      </Box>

      {/* Doctor-Section */}
      <Box py={'100px'} >
        <Title title={t('doctorsHeader.title')} subtitle={t('doctorsHeader.description')} />
        <DoctorsSection />
      </Box>

      {/* Department-Section */}
      <Department />

      {/* statistics-Section */}
        <Statistics />



      {/* Q/A */}
      <Box py={'100px'} bgcolor={'#d0f1f3'}>
      <Title title={t('accordionHeader.title')} subtitle={t('accordionHeader.description')} />
        <Container>
          {accordion.map((ele) => (
            <CustomizedAccordions key={ele.id} id={ele.id} panal={ele.Panal} Q={ele.Q} A={ele.A}/>
          ))}
        </Container>
      </Box>

      {/* Contact-Us  */}
      <Box pt={'100px'} >
        <Title title={t('contactUsHeader.title')} subtitle={t('contactUsHeader.description')} />
        <Contact />
      </Box>
    </Box>
  )
}

export default Home

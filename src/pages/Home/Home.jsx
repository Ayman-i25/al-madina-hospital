import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Home = () => {
  return (
    <Box>
      <Box bgcolor={'gray'} display={'flex'} justifyContent={'center'} >
        <Container>
          <Box width={'500px'} minHeight={"100vh"} alignContent={'center'}>
            <Typography variant='h4' fontWeight={'bold'}>Best Medical Clinic</Typography>
            <Typography mb={2} variant='h2' fontWeight={'bold'}><span style={{ color: '#05B1BD' }}>Bringing Health</span> To Life For The Whole Family...</Typography>
          <Button sx={{color:'white'}} size='large' variant='contained' bgcolor={'primary'} endIcon={<KeyboardDoubleArrowRightIcon />}>Get Appoinments </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home

import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Title = ({title = '', subtitle = ''}) => {
  return (
        <Box pb={'80px'} sx={{width:'100%', textAlign:'center'}}>
            <Typography color='secondary' fontWeight={'200'} variant='h4' gutterBottom>{title}</Typography>
            <Typography fontWeight={'bold'} variant='h4'>{subtitle}</Typography>
            <Divider sx={{width:'400px', margin:'20px auto 0' }}/>
        </Box>
    )
}

export default Title
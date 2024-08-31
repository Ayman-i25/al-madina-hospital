import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const DepartmentHerder = ({en, ar}) => {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language
    return (
        <>
        <Box my={4}>
            <Typography variant='h3' fontWeight='bold' color='primary' sx={{position:'relative', zIndex:'3'}}>{currentLang === 'en' ? en : ar}</Typography>
            <Typography variant='h3' fontWeight='bold' sx={{ color: 'white', textShadow: '-1px 1px 0 #000,1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000',marginTop:'-53px', marginLeft:'5px',position:'relative', opacity:'.4', zIndex:'1' }} >{currentLang === 'en' ? en : ar}</Typography>
        </Box>
        </>
    )
}

export default DepartmentHerder
import { Box } from '@mui/material'
import React from 'react'
import Contact from '../../Components/Contact'
import Title from '../../Components/Title'
import { useTranslation } from 'react-i18next'
const ContactPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <Box pt={'100px'}>
      <Title title={t('contactUsHeader.title')} subtitle={t('contactUsHeader.description')} />

      <Contact />
    </Box>
  )
}

export default ContactPage

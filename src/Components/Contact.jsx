import { Container, Box, TextField, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language;
    return (
        <>
            <Container>
                <Box width={'80%'} sx={{ margin: '0 auto' }}>
                    <form action="https://formsubmit.co/aymanibraheem19@gmail.com" method="POST" >
                        <TextField
                            margin="dense"
                            id="filled-basic"
                            name='subject'
                            fullWidth
                            placeholder={currentLanguage === 'en' ? 'Subject' : 'الموضوع'}
                            sx={{
                                background: '#efefef',
                                textAlign: currentLanguage === 'en' ? 'left' : 'right'
                            }}

                            required
                        />

                        <TextField
                            margin="dense"
                            id="filled-basic"
                            name='email'
                            fullWidth
                            placeholder={currentLanguage === 'en' ? 'Your Email' : 'الايميل'}
                            sx={{
                                background: '#efefef',
                                textAlign: currentLanguage === 'en' ? 'left' : 'right'
                            }}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="filled-multiline-static"
                            placeholder={currentLanguage === 'en' ? 'Write Your Message' : 'اكتب رسالتك'}
                            multiline
                            name='message'
                            fullWidth
                            rows={8}
                            sx={{
                                background: '#efefef',
                                textAlign: currentLanguage === 'en' ? 'left' : 'right'
                            }}

                            required
                        />
                        <Button type={'submit'}>send</Button>
                    </form>
                </Box>
            </Container>
            <Box width={'100%'} height={'400px'} mt={3}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.4546547716601!2d43.15710628639591!3d36.340945560062906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400795699eeab701%3A0xec36cedd182ef525!2z2YXYs9iq2LTZgdmJINin2YTZhdiv2YrZhtipINin2YTYo9mH2YTZiiAtIEFsLU1hZGluYSBQcml2YXRlIEhvc3BpdGFs!5e0!3m2!1sar!2siq!4v1724138899243!5m2!1sar!2siq" width="100%" height="100%" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </>
    )
}

export default Contact
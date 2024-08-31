import { Box, Container, Typography, Grid, Divider } from '@mui/material'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Title from '../../Components/Title'
import { useTranslation } from 'react-i18next'
import DepartmentHerder from '../../Components/DepartmentHerder'
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import DomainTwoToneIcon from '@mui/icons-material/DomainTwoTone';
import DialogImg from '../../Components/DialogImg'
import CustomizedAccordions from '../../Components/accordion'
const DepartmentSingle = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const handleClose = (value) => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const location = useParams()
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language
    const data = t(`departmentPage.${location.departmentId - 1}`, { returnObjects: true })
    const Accurdion = data.accordion
    return (
        <Box py={6}>
            <Container>
                <Title subtitle={data.title} />
                <DepartmentHerder en={'Details'} ar={'وصف القسم'} />
                <Grid container spacing={3} alignItems={'center'}>
                    <Grid item sm={3} sx={{marginBottom:'auto'}}>
                        <Box display='flex' alignItems='center' justifyContent={'center'} p={2} sx={{ background: 'rgb(5 177 189 / 7%)', border: '1px solid #00000021' }}>
                            <DescriptionTwoToneIcon fontSize='large' color='secondary' />
                            <Typography variant='button' fontSize={'19px'} color='secondary'> {currentLang === 'en' ? 'description' : 'نبذة عن القسم'}: </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={9} >
                        <Typography>{data.description}</Typography>
                        {(data.title === "قسم التصوير الطبي التشخيصي" || data.title === "radiological department") &&
                            <Grid container spacing={3} sx={{ marginTop: '20px' }}>
                                {data.devices && data.devices.map((ele, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Typography variant="h5" gutterBottom>
                                            {ele.name}
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body1" paragraph>
                                            {ele.details}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        }
                    </Grid>
                    {data.time === true &&
                        <>
                            <Grid item sm={3}>
                                <Box display='flex' alignItems='center' justifyContent={'center'} p={2} sx={{ background: 'rgb(5 177 189 / 7%)', border: '1px solid #00000021' }}>
                                    <WatchLaterTwoToneIcon fontSize='large' color='secondary' />
                                    <Typography variant='button' fontSize={'19px'} color='secondary' pl={1} pr={2}> {currentLang === 'en' ? 'Time' : 'أوقات الدوام'}: </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={9} >
                                <Typography  fontSize={'19px'}>  {data.timeText}  </Typography>
                            </Grid>
                        </>
                    }
                    <Grid item sm={3}>
                        <Box display='flex' alignItems='center' justifyContent={'center'} p={2} sx={{ background: 'rgb(5 177 189 / 7%)', border: '1px solid #00000021' }}>
                            <DomainTwoToneIcon fontSize='large' color='secondary' />
                            <Typography variant='button' fontSize={'19px'} color='secondary' pl={1} pr={2}> {currentLang === 'en' ? 'Floor' : 'الطابق'}: </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={9} >
                        <Typography  fontSize={'19px'}>  {data.floor}  </Typography>
                    </Grid>
                </Grid>

                {/* Gallery */}
                <DepartmentHerder en={'Gallery'} ar={'صور'} />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={7} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[0]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[0]))} /></Grid>
                    <Grid item xs={12} sm={6} md={5} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[1]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[1]))} /></Grid>
                    <Grid item xs={12} sm={6} md={4} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[2]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[2]))} /></Grid>
                    <Grid item xs={12} sm={6} md={8} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[3]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[3]))} /></Grid>
                    <Grid item xs={12} sm={6} md={6} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[4]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[4]))} /></Grid>
                    <Grid item xs={12} sm={6} md={6} height={'300px'} onClick={handleClickOpen}><img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '2px',padding:'6px', background:'#dfdfdf', cursor:'pointer' }} src={data.images[5]} alt='pic' onClick={(ele) => (setSelectedValue(data.images[5]))} /></Grid>
                </Grid>
                <DialogImg
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                />
                {/* FaQ */}

                <DepartmentHerder en={'FAQ'} ar={'اسئلة شائعة'} />
                <Box>
                    {Accurdion.map((ele) => (
                        <CustomizedAccordions key={ele.id} panal={ele.panal} Q={ele.Q} A={ele.A} />
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default DepartmentSingle
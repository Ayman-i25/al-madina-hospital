import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function CustomizedAccordions({ panal, id, Q, A }) {
    const [expanded, setExpanded] = useState('panel1'); // Default to no panels expanded

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false); // Only one panel expanded at a time
    };
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <Box>
            <Accordion
            sx={{border:'1px solid #00000022'}}
                disableGutters
                elevation={0}
                key={id}
                expanded={expanded === panal}
                onChange={handleChange(panal)}
                slotProps={{ transition: { unmountOnExit: true } }}
            >
                <AccordionSummary
                    sx={{
                        flexDirection: 'row-reverse',
                        background: '#f8f8f8',
                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                            transform: currentLanguage === 'en' ? 'rotate(90deg)' : 'rotate(-90deg)',
                        },
                    }}
                    aria-controls="panel-content"
                    id={id}
                    expandIcon={
                        currentLanguage === 'en' ? (
                            <ArrowForwardIosSharpIcon color='secondary' sx={{ fontSize: '0.9rem', margin: '0 10px' }} />
                        ) : (
                            <ArrowBackIosNewIcon color='secondary' sx={{ fontSize: '0.9rem', margin: '0 10px' }} />
                        )
                    }
                >
                    <Typography fontSize={'18px'} color='primary'>
                        {Q}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize={'15px'}>
                        {A}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

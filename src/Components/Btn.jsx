import { Button } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CustomButton = ({ title, vari, color, size, href = '#' }) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <Link to={href} style={{ textDecoration: 'none' }}>
            <Button
                variant={vari}
                color={color}
                size={size}
                sx={{
                    width: 'fit-Content',
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiButton-endIcon': {
                        // Apply margin based on the language
                        margin: currentLanguage === 'en' ? '0 0 0 10px' : '0 10px 0 0'
                    }
                }}
                endIcon={currentLanguage === 'en' ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}

                disableElevation
            >
                {title}
            </Button>
        </Link>
    );
}

export default CustomButton;

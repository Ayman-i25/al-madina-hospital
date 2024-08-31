import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function DialogImg(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog 
            onClose={handleClose}
            open={open}      
            TransitionComponent={Transition}
            keepMounted
            PaperProps={{
                sx:{
                    maxWidth:'800px'
                }
            }}
            >
            <img
                style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '2px'
                }}
                src={selectedValue}
                alt={`pic`}
            />
        </Dialog>
    );
}
export default DialogImg

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//     const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    
//     const [open, setOpen] = React.useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div>
//             <Typography variant="subtitle1" component="div">
//                 Selected: {selectedValue}
//             </Typography>
//             <br />
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Open simple dialog
//             </Button>
//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }

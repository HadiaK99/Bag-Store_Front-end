import { Box, TextField, Typography, styled } from "@mui/material";
import { Colors } from "../theme";


export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',
}));

export const FooterContainer = styled(Box)(({theme}) => ({
    background: Colors.shaft,
    color: Colors.white,
    fontSize: '14px',
    padding:'80px',    
    [theme.breakpoints.down('md')]:{
        fontSize: '12px',
        padding:'32px',
        paddingBottom: '40px'
    },
    paddingTop: '96px',
    paddingBottom: '96px',
}));

export const IconContainer = styled(Box)(() => ({
    marginTop: '32px',
    color: Colors.dove_gray,
}));

export const SubscribeTf = styled(TextField)(() => ({
    '.MuiInputLabel-root':{
        color: Colors.secondary,
    },
    '.MuiInput-root::before': {
        borderBottom: `1px solid ${Colors.secondary}`,
    },
}));
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close"
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/Products";
import IncDec from "../ui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box) (({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4),
}));

const ProducDetailInfoWrapper = styled(Box) (() => ({
    display:' flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({open, onClose, product}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanent"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{background: Colors.secondary}}>
                <Box display={'flex'} alignItems='center' justifyContent='space-between' >
                    Product Title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{mr:4}}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProducDetailInfoWrapper>
                        <Typography variant="subtitle1">SKU 123</Typography>
                        <Typography variant="subtitle1">Availability: 5 in stock</Typography>
                        <Typography variant="h4" sx={{lineHeight:2}}>{product.name}</Typography>
                        <Typography variant="body">
                            {product.description}
                            {product.description}
                            {product.description}
                        </Typography>
                        <Box sx={{mt:4}} display='flex' alignItems='center' justifyContent='space-between' >
                            <IncDec />
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                        <Box sx={{mt:4, color:Colors.light}} display='flex' alignItems='center' >
                            <FavoriteIcon sx={{mr:2}} />
                            Add to Wishlist
                        </Box>
                        <Box sx={{mt:4, color:Colors.light}}>
                            <FacebookIcon />
                            <TwitterIcon sx={{pl:theme.spacing(4)}} />
                            <InstagramIcon sx={{pl:theme.spacing(4)}} />
                        </Box>
                    </ProducDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}
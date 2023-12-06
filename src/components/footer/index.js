import { Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterContainer, FooterTitle, IconContainer, SubscribeTf } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import { Colors } from "../../styles/theme";

function Footer() {

    return (
        <FooterContainer>
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant='caption2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Risus pretium quam vulputate dignissim. 
                    </Typography>
                    <IconContainer>
                        <FacebookIcon sx={{mr:1}}/>
                        <InstagramIcon sx={{mr:1}}/>
                        <TwitterIcon />
                    </IconContainer>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf color='primary' label='Email Address' variant="standard" />
                        <Button startIcon={<SendIcon sx={{color: Colors.white}} />}
                                sx={{ mt:4, mb:4 }} 
                                variant="contained" >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </FooterContainer>
    )
}

export default Footer;



/** Inline styling for container
 * <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: {xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: {xs: '12px', md:'14px'},
            }}
        ></Box>
*/
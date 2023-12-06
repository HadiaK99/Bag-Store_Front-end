import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

function Banner(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant='h2'>New Bags</BannerTitle>
                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Mi ipsum faucibus vitae aliquet. Et molestie ac feugiat sed lectus vestibulum.
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}

export default Banner;
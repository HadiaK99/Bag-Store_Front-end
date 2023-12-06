import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import theme from "../styles/theme";
import Appbar from "./appbar"
import Banner from "./banner/banner";
import Promotions from "./promotions";
import Products from "./products";
import Footer from "./footer";
import AppDrawer from "./drawer";
import { UIProvider } from "../context/ui";
import SearchBox from "./search";

function App(){

    useEffect(() => {
        document.title = "React Material UI - Home";
    }, []);

    return (
        <ThemeProvider theme={theme}>

            <Container
                maxWidth="xl"
                sx={{
                    background: '#fff'
                }}
            >

            <UIProvider>
                <Appbar />
                <Banner />
                <Promotions />
                <Box display='flex' justifyContent={'center'} sx={{p:4}}>
                    <Typography variant='h4'>Our Products</Typography>
                </Box>
                <Products />
                <Footer />
                <AppDrawer />
                <SearchBox />
            </UIProvider>

            </Container>
        </ThemeProvider>
    );
}

export default App;
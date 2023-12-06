import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";



function Appbar(){

    const theme = useTheme();

    // if matches is true (down) im in the mobile zone
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}
        </>
    );
}


export default Appbar;
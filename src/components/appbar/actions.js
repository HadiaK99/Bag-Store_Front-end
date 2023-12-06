import { Divider } from "@mui/material";
import { ActionIconContainerDesktop, ActionIconContainerMobile, MyList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListButtonIcon from "./ListButtonIcon";
import { Colors } from "../../styles/theme";

function Actions({matches}){

    const Component = matches ? ActionIconContainerMobile : ActionIconContainerDesktop;

    return (
        <Component>
            <MyList type="row" >
                <ListButtonIcon Icon=<ShoppingCartIcon sx={{ color: {matches} && Colors.secondary }} /> />
                <Divider orientation="vertical" flexItem />
                <ListButtonIcon Icon=<FavoriteIcon sx={{ color: {matches} && Colors.secondary }} /> />
                <Divider orientation="vertical" flexItem />
                <ListButtonIcon Icon=<PersonIcon sx={{ color: {matches} && Colors.secondary }} /> />
            </MyList>
        </Component>
    );
}

export default Actions;
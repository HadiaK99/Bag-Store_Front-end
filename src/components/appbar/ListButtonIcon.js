import { ListItemButton, ListItemIcon } from "@mui/material";


function ListButtonIcon(props){



    return (
        <ListItemButton
            sx={{ justifyContent:'center' }}>
                <ListItemIcon 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                {props.Icon}
                
            </ListItemIcon>
        </ListItemButton>
    );
}

export default ListButtonIcon;
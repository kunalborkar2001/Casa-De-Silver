import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import ExploreIcon from '@mui/icons-material/Explore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function TemporaryDrawer() {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const buttons = [
        <Button key="Home"><HomeIcon/>Home</Button>,
        <Button key="Menu"><MenuBookIcon/>Menu</Button>,
        <Button key="Gallery"><CollectionsIcon/>Gallery</Button>,
        <Button key="AboutUs"><InfoIcon/>About Us</Button>,
        <Button key="Location"><ExploreIcon/>Location</Button>,
        <Button key="ContactUs"><ConnectWithoutContactIcon/>Contact Us</Button>,
    ];


    return (
        <div className='offCanvas' >
            <React.Fragment key="left">
                <Button onClick={toggleDrawer("left", true)}><FastfoodIcon /> Options </Button>
                <Drawer
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="Vertical button group"
                            variant="text"
                        >
                            <div className='offCanvasLogo'>
                            <img
                                src="https://d3kanykijpjn5y.cloudfront.net/d9520615cdf9c6f9f7e6e1c168c07585.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            </div>
                            {buttons}
                        </ButtonGroup>
                    </Box>
                </Drawer>
            </React.Fragment>

        </div>
    );
}
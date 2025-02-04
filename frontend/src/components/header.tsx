import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
    return (
        <AppBar sx={{}}>
            <Toolbar>
                <h1>Chat App</h1>
            </Toolbar>
        </AppBar>
    );
    };

export default Header;
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { menuItems } from "./Header.config";
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { StyledMenu } from "./styles";
import { Logo } from "../assets";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (<>
    <IconButton
      onClick={() => setOpen(true)}
    >
      <MenuIcon color="secondary" />
    </IconButton>
    <StyledMenu open={open}>
      <div className="mobile-menu-header">
        <Logo />
        <div onClick={() => setOpen(false)} className="mobile-menu-close">
          <CloseIcon color="secondary" />
        </div>
      </div>
      <div className="mobile-menu">
        {menuItems.map(item => (
          <div key={item} className="mobile-menu-item" onClick={() => setOpen(false)}>
            {item}
          </div>
        ))}
      </div>
      <div className="mobile-menu-action">
        <Button variant="contained" size="large">
          Start free trial
        </Button>
        <div className="mobile-menu-login">
          Existing customer? <a> Login </a>
        </div>
      </div>
    </StyledMenu>
  </>)
};
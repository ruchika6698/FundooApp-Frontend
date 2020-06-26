import React from "react";
import { Menu, MenuItem,Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../CSS/dashboard.css"

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <AccountCircleIcon onClick={handleClick} />
      <Menu
        className="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem><Button onClick={() => this.props.history.push("/")}>Log Out</Button></MenuItem>
      </Menu>
    </div>
  );
}

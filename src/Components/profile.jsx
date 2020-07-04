import React from "react";
import { Menu,Popper,MenuItem,
  Fade,
  Paper,
  ClickAwayListener, } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link } from "react-router-dom";
import "../CSS/dashboard.css"

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const OnLogOut=()=>{
        localStorage.removeItem("Token")
        localStorage.removeItem("FirstName")
        localStorage.removeItem("LastName")
        localStorage.removeItem("Email")
        props.history.push("/")
  }

  const open = Boolean(anchorEl);

  return (
    <div>
      <AccountCircleIcon onClick={handleClick} />
       <Popper
          open={open}
          anchorEl={anchorEl}
          placement={"bottom"}
          transition
          style={{ position: "fixed" }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={0}>
              <Paper className="moreOptionsPopper">
                <ClickAwayListener onClickAway={() => this.closeLabelPopper()}>
      <Menu
        className="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem onClick={OnLogOut}>Log Out</MenuItem>
      </Menu>
      </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
    </div>
  );
}

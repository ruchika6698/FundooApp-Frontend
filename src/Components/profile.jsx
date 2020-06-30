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
      <Link to="/" outline="none"><MenuItem>Log Out</MenuItem></Link>
      </Menu>
      </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
    </div>
  );
}

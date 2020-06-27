import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../CSS/dashboard.css";
import AddLabel from "./addLable";
import DeleteNote from "./deleteNote";

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [trash, unTrash] = React.useState(false);

  const handleTrash = () => {
        unTrash(!trash)
    }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        className="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <DeleteNote onSelectTrash={handleTrash}>Delete Note</DeleteNote>
        </MenuItem>
        <MenuItem>
          <AddLabel>Add Label</AddLabel>
        </MenuItem>
        <MenuItem>Add Drawing</MenuItem>
        <MenuItem>Show Checkboxes</MenuItem>
      </Menu>
    </div>
  );
}

import React, { Component } from "react";
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ImageIcon from "@material-ui/icons/Image";
import ArchiveIcon from "@material-ui/icons/Archive";
import InputBase from "@material-ui/core/InputBase";
import ListDropDown from "./listDropDown";

export class Icons extends Component {
  render() {
    return (
          <Paper className="iconcom">
            <IconButton aria-label="Remind me">
              <Tooltip title="Reminde me">
                <AddAlertIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Collaborator">
              <Tooltip title="Collaborator">
                <PersonAddIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Change color">
              <Tooltip title="Change color">
                <ColorLensIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Add image">
              <Tooltip title="Add image">
                <ImageIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Archive note">
              <Tooltip title="Archive">
                <ArchiveIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="More">
              <Tooltip title="More">
                <ListDropDown />
              </Tooltip>
            </IconButton>
        </Paper>
    );
  }
}
export default Icons;

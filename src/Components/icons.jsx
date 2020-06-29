import React, { Component } from "react";
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import InputBase from "@material-ui/core/InputBase";
import MoreOptions from "./moreOptions";
import Color from "./color";

export class Icons extends Component {
  
  render() {
    return (
          <div >
            <IconButton aria-label="Remind me">
              <Tooltip title="Reminde me">
                <AddAlertOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Collaborator">
              <Tooltip title="Collaborator">
                <PersonAddOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Change color">
              <Tooltip title="Change color">
                <Color noteId={this.props.noteObject}/>
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Add image">
              <Tooltip title="Add image">
                <ImageOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Archive note">
              <Tooltip title="Archive">
                <ArchiveOutlinedIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="More">
              <Tooltip title="More">
                <MoreOptions noteId={this.props.noteObject}/>
              </Tooltip>
            </IconButton>
        </div>
    );
  }
}
export default Icons;
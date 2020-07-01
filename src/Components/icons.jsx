import React, { Component } from "react";
import "../CSS/dashboard.css";
import archiveicon from "../Assets/archiveicon.svg";
import addCollaborator from "../Assets/addCollaborator.svg";
import addReminder from "../Assets/addReminder.svg";
import image from "../Assets/image.svg";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MoreOptions from "./moreOptions";
import Color from "./color";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class Icons extends Component {
  


  handleArchieveNotes = () => {
    let token = localStorage.getItem("Token");
    let requestData = {
      noteIdList: [this.props.noteObject.id],
      isArchived: true,
    };
    services.ArchieveNotes(token, requestData).then((json) => {
      if (json.data.data.success === true) {
        console.log("Archieve note",json);
      }
    })
    .catch((err) => {
          console.log(err);
        });
        this.props.UpdateNote();
  };

  render() {
    return (
          <div >
            <IconButton aria-label="Remind me">
              <Tooltip title="Reminde me">
                <img src={addReminder} label="Add Reminder" />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Collaborator">
              <Tooltip title="Collaborator">
                <img src={addCollaborator} label="Color" />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Change color">
              <Tooltip title="Change color">
                 <Color noteId={this.props.noteObject}/>
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Add image">
              <Tooltip title="Add image">
                <img src={image} label="Image" />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Archive note">
              <Tooltip title="Archive">
                <img src={archiveicon} label="Archive note" onClick={this.handleArchieveNotes}/>
              </Tooltip>
            </IconButton>

            <IconButton aria-label="More">
              <Tooltip title="More">
                <MoreOptions noteId={this.props.noteObject} refreshID={this.props.UpdateNote}/>
              </Tooltip>
            </IconButton>
        </div>
    );
  }
}
export default Icons;
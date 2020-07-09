import React, { Component } from "react";
import "../CSS/dashboard.css";
import archiveicon from "../Assets/archiveicon.svg";
import Dialog from "@material-ui/core/Dialog";
import addCollaborator from "../Assets/addCollaborator.svg";
import addReminder from "../Assets/addReminder.svg";
import image from "../Assets/image.svg";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MoreOptions from "./moreOptions";
import Color from "./color";
import Collaborator from "./collaborator";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      collaboratorOpen: false,
      file: null,
    };
    this.handlercollaborator = this.handlercollaborator.bind(this);
  }

  handlercollaborator = (eve) => {
    this.setState({ collaboratorOpen: true });
    if (this.props.source === "noteTitle") {
      this.props.CollaboratorIcon();
    }
  };

  handleArchieveNotes = () => {
    let token = localStorage.getItem("Token");
    let requestData = {
      noteIdList: [this.props.noteObject.id],
      isArchived: true,
    };
    services
      .ArchieveNotes(token, requestData)
      .then((json) => {
        if (json.data.data.success === true) {
          console.log("Archieve note", json);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.UpdateNote();
  };

  fileChangedHandler = (event) => {
    event.preventDefault();
    this.setState({ file: event.target.files[0] });
  };

  render() {
    return (
      <div className="icons">
        <Tooltip title="Reminde me" className="reminder">
          <img src={addReminder} label="Add Reminder" alt="Add Reminder" />
        </Tooltip>

        <Tooltip title="Collaborator" className="collab">
          <img
            src={addCollaborator}
            label="Collaborator"
            alt="Add Person icon"
            onClick={() => this.handlercollaborator()}
          />
        </Tooltip>

        <Tooltip title="Change color" className="changecolor">
          <Color
            noteId={this.props.noteObject}
            refreshID={this.props.UpdateNote}
          />
        </Tooltip>

        <input
          type="file"
          style={{ display: "none" }}
          onChange={(event) => this.props.uploadImage(event.target.files[0])}
          ref={(fileUpload) => (this.fileUpload = fileUpload)}
        ></input>
        <img
          className="file"
          onClick={() => this.fileUpload.click()}
          file={this.fileChangedHandler}
          src={image}
          label="New note with image"
          alt="new note"
        />

        <Tooltip title="Archive" className="archieve">
          <img
            src={archiveicon}
            label="Archive note"
            onClick={this.handleArchieveNotes}
            alt="Archive note"
          />
        </Tooltip>

        <Tooltip title="More" className="moreop">
          <MoreOptions
            noteId={this.props.noteObject}
            refreshID={this.props.UpdateNote}
          />
        </Tooltip>

        <div>
          {this.state.collaboratorOpen ? (
            Boolean(this.props.noteObject) ? (
              <Dialog
                id="collaboraterdilogBox"
                maxWidth="false"
                open={this.state.collaboratorOpen}
              >
                <Collaborator noteId={this.props.noteObject} />
              </Dialog>
            ) : (
              <Collaborator noteId={this.props.noteObject} />
            )
          ) : undefined}
        </div>
      </div>
    );
  }
}
export default Icons;

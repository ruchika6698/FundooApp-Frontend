import React, { Component } from "react";
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import ImageIcon from "@material-ui/icons/Image";
import ArchiveIcon from "@material-ui/icons/Archive";
import InputBase from "@material-ui/core/InputBase";
import UndoTwoToneIcon from "@material-ui/icons/UndoTwoTone";
import RedoTwoToneIcon from "@material-ui/icons/RedoTwoTone";
import ListDropDown from "./listDropDown";
import Images from "../Assets/images.png";
import Blackpin from "../Assets/Blackpin.png";
import NotesService from "../Services/notesServices";
let services = new NotesService();

class WholeNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImg: false,
      imagetrue: true,
      title: "",
      description: "",
    };
  }
  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log("notes", this.state);
  };
  state = {
    anchorEl: null,
  };
  handleToggle = () => {
    this.setState({ openImg: !this.state.openImg });
    console.log(this.state.openImg);
  };
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  Createnote = (e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData = {
      title: this.state.title,
      description: this.state.description,
    };
    services
      .CreateNote(requestData)
      .then((data) => {
        console.log(" Create notes Successful ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDrawer = (event) => {
    this.props.openDrawer();

    const { currentTarget } = event;
    this.setState({
      AnchorEl: currentTarget,
      open: !this.state.open,
    });
  };
  render() {
    return (
      <div className="wholeCard">
        <Paper className="wholeNoteCard" onClick={this.clickNote}>
          <Paper className="titleAndPin">
            <InputBase
              className="wholeTitle"
              name="title"
              color="white"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeText}
              InputProps={{
                disableUnderline: true,
              }}
            />
            {this.state.openImg !== true ? (
              <Tooltip title="Pin note">
                <img
                  className="pinImage"
                  src={Images}
                  alt="pin logo"
                  width="50"
                  height="40"
                  onClick={this.handleToggle}
                ></img>
              </Tooltip>
            ) : (
              <Tooltip title="Pin note">
                <img
                  className="pinImage"
                  src={Blackpin}
                  alt="pin logo"
                  width="40"
                  height="35"
                  onClick={this.handleToggle}
                ></img>
              </Tooltip>
            )}
          </Paper>

          <Paper>
            <InputBase
              className="wholeTitle"
              name="description"
              color="white"
              placeholder="Take a note..."
              value={this.state.description}
              onChange={this.handleChangeText}
            />
          </Paper>

          <Paper className="actionButtons">
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

            {/* <IconButton aria-label="Undo">
              <Tooltip title="Undo">
                <UndoTwoToneIcon />
              </Tooltip>
            </IconButton>

            <IconButton aria-label="Redo">
              <Tooltip title="Redo">
                <RedoTwoToneIcon />
              </Tooltip>
            </IconButton> */}
            <Tooltip className="cancelButton" title="Close">
              <Button
                margin="dense"
                size="small"
                color="primary"
                onClick={this.Createnote}
              >
                Close
              </Button>
            </Tooltip>
          </Paper>
        </Paper>
      </div>
    );
  }
}

export default WholeNote;

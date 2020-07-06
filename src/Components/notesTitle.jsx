import React, { Component } from "react";
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import {
  TextField,
  Button,
  Snackbar,
  Checkbox,
  ClickAwayListener,
} from "@material-ui/core";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Icons from "./icons";
import pinNote from "../Assets/pinNote.svg";
import Card from "@material-ui/core/Card";
import Blackpin from "../Assets/Blackpin.png";
import NotesService from "../Services/notesServices";
let services = new NotesService();

class Notestitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImg: false,
      imagetrue: true,
      title: "",
      description: "",
      file: "",
      color:"",
      collaberators: [],
      snackbarOpen: false,
      snackbarMsg: "",
      selsectedImage:""
    };
  }

  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log("notes", this.state);
  };
  snackbarClose = () => {
    this.setState({ snackbarOpen: false });
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
      openImg:false
    });
  };

  Createnote = () => {
    console.log(this.state);
    let token = localStorage.getItem("Token");
    let requestData = {
      title: this.state.title,
      description: this.state.description,
      file: this.state.file,
      // collaberators:JSON.Stringify(this.state.collaberators),
      // color:this.state.color
    };
    services
      .CreateNote(token, requestData)
      .then((json) => {
        if (json.status === 200) {
          this.setState({
            snackbarOpen: true,
            snackbarMsg: "Notes Created Suceesfully..!",
          });
        }
        console.log(" Create notes Successful ", json);
      })
      .catch((err) => {
        console.log(err);
      });
      this.handleClose();
    this.props.UpdateNote();
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
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbarOpen}
          autoHideDuration={500}
          onClose={this.snackbarClose}
          message={<span class="Snackbar">{this.state.snackbarMsg}</span>}
          action={
            <IconButton
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            ></IconButton>
          }
        />
        <Card className="wholeNoteCard">
          <Paper className="titleAndPin">
            <InputBase
              className="wholeTitle"
              name="title"
              color="white"
              placeholder="Title"
              multiline
              style={{ width: "80%" }}
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
                  src={pinNote}
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
                  multiline
                  style={{ width: "100%" }}
                  placeholder="Take a note..."
                  value={this.state.description}
                  onChange={this.handleChangeText}
                />
            <div className="collaborator">
                {
                  (Boolean(this.props.collaboratorData))?
                      <div>
                      <IconButton >
                        <PersonAddOutlinedIcon  data = {this.props.collaboratorData} />
                       </IconButton >
                      </div>                    
                  :undefined
                }
              </div>
          </Paper>
          <Paper className="actionButtons">
            <div className="iconbutton">
              <Icons
                CollaboratorIcon={this.props.onCollaborator}
                source="noteTitle"
              />
              <Tooltip className="cancelButton" title="Close">
                <Button margin="dense" size="small" onClick={this.Createnote}>
                  Close
                </Button>
              </Tooltip>
            </div>
          </Paper>
        </Card>
      </div>
    );
  }
}

export default Notestitle;

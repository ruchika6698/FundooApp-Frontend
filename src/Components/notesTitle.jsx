import React, { Component } from "react";
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import {
  TextField,
  Button,
  Snackbar,
  Checkbox,
  Avatar,
  ClickAwayListener,
} from "@material-ui/core";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Icons from "./icons";
import pinNote from "../Assets/pinNote.svg";
import Card from "@material-ui/core/Card";
import Blackpin from "../Assets/Blackpin.png";
import NotesService from "../Services/notesServices";
let services = new NotesService();

const reader = new FileReader();

class Notestitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImg: false,
      open: false,
      imagetrue: true,
      title: "",
      description: "",
      file: "",
      color: "",
      collaberators: [],
      checkList: [""],
      snackbarOpen: false,
      selsectedImage: false,
      snackbarMsg: "",
      isCheckList: false,
      clearIcon: false,
      isClickOn: false,
      checklist: "",
    };
  }

  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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

  getImageData = (file) => {
    this.setstate({ image: file });
  };

  handleClose = () => {
    this.setState({
      open: true,
    });
  };

  //Add checklist handler
  AddCheckList = () => {
    let CheckListArray = [...this.state.checkList];
    let ListArray = CheckListArray[CheckListArray.length - 1];
    CheckListArray[CheckListArray.length - 1] = "";
    CheckListArray.push(ListArray);
    this.setState({ checkList: CheckListArray });
  };

  onChangeList = (index) => (eve) => {
    let CheckListArray = [...this.state.checkList];
    CheckListArray[index] = {
      itemName: eve.target.value,
      status:
        CheckListArray[index].isChecked !== undefined
          ? CheckListArray[index].status
          : "open",
      isDeleted: "false",
      noteId: "",
    };
    this.setState({ checkList: CheckListArray });
  };
  //Checkbox handler for list is checked or not
  CheckBoxhandler = (index) => (eve) => {
    let ListArray = [...this.state.checkList];
    ListArray[index] = {
      itemName: ListArray[index].itemName,
      status:
        ListArray[index].status === undefined ||
        ListArray[index].status === "open"
          ? "close"
          : "open",
      isDeleted: "false",
      noteId: "",
    };
    this.setState({ checkList: ListArray });
  };
  clearIconOnHover = () => {
    this.setState({ ClearIcon: true });
  };
  clearIconOffhover = () => {
    if (!this.state.isClickOn) {
      this.setState({ ClearIcon: false });
    }
  };
  clearIconClick = () => {
    if (!this.state.isClickOn) {
      this.setState({ ClearIcon: false });
    }
  };
  clarClickAway = () => {
    if (this.state.isClickOn) {
      this.setState({ ClearIcon: false });
    }
  };

  // API for Create note and checklist
  Createnote = () => {
    let token = localStorage.getItem("Token");
    let apiInputData = new FormData();

    apiInputData.set("title", this.state.title);
    apiInputData.set(
      "description",
      Boolean(this.state.description) ? this.state.description : ""
    );
    apiInputData.set(
      "collaberators",
      Boolean(this.state.collaberators)
        ? JSON.stringify(this.state.collaberators)
        : ""
    );
    apiInputData.set("file", Boolean(this.state.file) ? this.state.file : "");
    this.state.checkList.pop();
    apiInputData.set("checklist", JSON.stringify(this.state.checkList));
    console.log("file image", this.state.file);
    services
      .CreateNote(token, apiInputData)
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
    this.props.UpdateNote();
    this.handleClose();
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
            <div>
              {Boolean(this.state.file)? 
              <img
                src={`${(this.state.file)}`}
                alt="Curently image is not available"
                width="700px"
                height="700px"
              />
              : undefined 
              }
              {/* {`${URL.createObjectURL(this.state.file)}`} */}
            </div>
            <InputBase
              className="wholeTitle"
              id="title"
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
            <div>
              {this.props.checkListOpen ? (
                this.state.checkList.map((values, index) => {
                  if (index === this.state.checkList.length - 1) {
                    return (
                      <div>
                        <TextField
                          disabled
                          className="takeNote"
                          placeholder="  +   List item"
                          multiline
                          textdecaration="none"
                          onClick={this.AddCheckList}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <ClickAwayListener
                        onClickAway={this.clarClickAway}
                        className="ClickAwayListener"
                      >
                        <div
                          className="CheckListFields"
                          onMouseEnter={this.clearIconOnHover}
                          onMouseLeave={this.clearIconOffhover}
                          onClick={this.clearIconClick}
                        >
                          <div>
                            <Checkbox
                              checked={values.isChecked}
                              onChange={this.CheckBoxhandler(index)}
                              style={{ color: "black" }}
                            />
                          </div>

                          <div>
                            <TextField
                              className="takeNote"
                              fullWidth
                              multiline
                              placeholder="Take a Note"
                              textdecaration="none"
                              name={index}
                              value={values.value}
                              onChange={this.onChangeList(index)}
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </div>
                          <div>
                            <IconButton fontSize="small">
                              {this.state.clearIcon ? (
                                <ClearOutlinedIcon fontSize="small" />
                              ) : undefined}
                            </IconButton>
                          </div>
                        </div>
                      </ClickAwayListener>
                    );
                  }
                })
              ) : (
                <InputBase
                  className="wholeTitle"
                  id="description"
                  name="description"
                  color="white"
                  multiline
                  style={{ width: "100%" }}
                  placeholder="Take a note..."
                  value={this.state.description}
                  onChange={this.handleChangeText}
                />
              )}
            </div>
            <div className="collaborator">
              {Boolean(this.props.collaboratorData) ? (
                <div>
                 <Tooltip title={this.props.collaboratorData.email} placement="bottom">
                        <Avatar
                          alt={this.props.collaboratorData.firstName}
                          src="/"
                        ></Avatar>
                      </Tooltip>
                  {/* <IconButton>
                    <PersonAddOutlinedIcon data={this.props.collaboratorData} />
                  </IconButton> */}
                </div>
              ) : undefined}
            </div>
          </Paper>
          <Paper className="actionButtons">
            <div className="iconbutton">
            <div className="notesicon">
              <Icons
                CollaboratorIcon={this.props.onCollaborator}
                uploadImage={(data) => {
                  this.setState({ file: data });
                }}
                source="noteTitle"
              />
              </div>
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

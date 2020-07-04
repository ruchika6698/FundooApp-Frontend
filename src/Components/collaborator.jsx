import React from "react";
import addCollaborator from "../Assets/addCollaborator.svg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, MenuList, Popover } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class Collaborator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      userName: "",
      id: "",
      userList: [],
      anchorEl: null,
      collabatorName: "",
      userData:'',
      collaborators:''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
   onSearchClickClick = (event) => {
        this.setState({
            anchorEl : event.currentTarget
        });
      };

  // user searching data
  UserList = (event) => {
    this.setState({
      collabatorName: event.target.value,
    });
    console.log("collaborator name",this.state);
    let token = localStorage.getItem("Token");
    let requestData = {
      searchWord: event.target.value,
    };
    console.log("request data", requestData);
    services
      .SearchUser(token, requestData)
      .then((json) => {
        if (json.status === 200) {
          this.setState({
            anchorEl: event.currentTarget,
            open: true,
          });
          this.setState({ userList: json.data.data.details });
          console.log(" User list found ", this.state.userList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  OnSelect =(data)=>{
        this.setState({
            collabatorName : data.email,
            userData : data,
        })
    }

  Collaborator = (eve) => {
    let   collaborators = this.state.userData
    let token = localStorage.getItem("Token");
    console.log("note id  " ,this.props.noteId.id)
    services
      .AddCollaborator( this.props.noteId.id, token, collaborators)
      .then((json) => {
        console.log("Collaborator Data", json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const userList = this.state.userList.map((values, index) => {
      return (
        <MenuItem key={index} onClick={() => this.OnSelect(values)}>
          {values.email}
        </MenuItem>
      );
    });
    return (
      <div>
        <img
          src={addCollaborator}
          label="Collaborator"
          alt="Add Person icon"
          onClick={this.handleClickOpen}
        />
        <Dialog
          className="collaborationdialog"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className="collaboratorTitle">
            Collaborators
          </DialogTitle>
          <Divider variant="middle" />
          <DialogContent>
            <DialogContentText className="dialogtext">
              <div className="ownerProfile">
                <div className="OwerProfileImage">
                  <AccountCircleIcon fontSize="large" />
                </div>
                <div className="nameAndMail">
                  <div>
                    {localStorage.getItem("FirstName") +
                      " " +
                      localStorage.getItem("LastName") +
                      "   " +
                      "(Owner)"}
                  </div>
                  <div>{localStorage.Email}</div>
                </div>
              </div>
            </DialogContentText>
            <div className="dialogSearch">
              <div className="dialogimage">
                <img
                  src={addCollaborator}
                  label="Collaborator"
                  alt="Add Collaborator"
                />
              </div>
              <div className="dialogtextfield">
                <TextField
                  placeholder="Person or Email to Share with"
                  id="standard-full-width"
                  fullWidth
                  name="userName"
                  onClick={this.onSearchClick}
                  value={this.state.collabatorName}
                  onChange={this.UserList}
                  margin="normal"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <Popover
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                  style={{'maxHeight': '365px'}}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <MenuList>{userList}</MenuList>
                </Popover>
              </div>
            </div>
          </DialogContent>
          <DialogActions className="dialogbutton">
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.Collaborator()}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default Collaborator;

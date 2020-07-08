import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import "../CSS/dashboard.css";
import Config from "../Configuration/config"
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Icons from "./icons";
import pinNote from "../Assets/pinNote.svg";
import Card from "@material-ui/core/Card";
import Blackpin from "../Assets/Blackpin.png";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class UpdateNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: "",
      title: "",
      description: "",
      file: "",
      imageUrl:"",
      color: "",
      selsectedImage:""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let Data = this.props.Data;
    this.setState({
      noteId: Data.id,
      title: Data.title,
      description: Data.description,
      imageUrl: Data.imageUrl,
      color: Data.color,
    });
    console.log("component did mount update",this.state);
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  Updatenote = () => {
    let data = {
      noteId: this.props.Data.id,
      title: this.state.title,
      description: this.state.description,
      imageUrl : this.state.imageUrl,
      color: this.state.color,
    };
    let token = localStorage.getItem("Token");
    services
      .UpdateNotes(token, data)
      .then((json) => {
        console.log("Updated data", json);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.close();
    this.props.UpdateNote();
  };

  handleClickOpen = () => {
    this.setState({
      open: this.props.Open,
    });
    console.log(this.props);
  };

  handleClose = () => {};

  render() {
    return (
      <div>
        <Dialog open={this.props.Open} onClose={this.handleClose} maxWidth="lg">
          <Card
            className="updateCard"
            onClick={this.clickNote}
            style={{
              backgroundColor: `${this.props.Data.color}`,
            }}
          >
            <div>
            {Boolean(this.props.Data.imageUrl) ? 
              <img src={`${Config.imgUrl}this.props.Data.imageUrl`} style={{ height: '250px' , width: '660px' }} />
              : undefined
            }
        </div>
            <Paper
              className="titleAndPin"
              style={{
                backgroundColor: `${this.props.Data.color}`,
              }}
            >
              <InputBase
                className="wholeTitle"
                name="title"
                color="white"
                placeholder="Title"
                multiline
                style={{ width: "80%" }}
                defaultValue={this.props.Data.title}
                onChange={this.handleChange}
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {this.state.openImg !== true ? (
                <Tooltip title="Pin note">
                  <img
                    className="updatepin"
                    src={pinNote}
                    alt="pin logo"
                    onClick={this.handleToggle}
                  ></img>
                </Tooltip>
              ) : (
                <Tooltip title="Pin note">
                  <img
                    className="updatepin"
                    src={Blackpin}
                    alt="pin logo"
                    width="40"
                    height="35"
                    onClick={this.handleToggle}
                  ></img>
                </Tooltip>
              )}
            </Paper>

            <Paper
              style={{
                backgroundColor: `${this.props.Data.color}`,
              }}
            >
              <InputBase
                className="wholeTitle"
                name="description"
                color="white"
                multiline
                style={{ width: "100%" }}
                placeholder="Take a note..."
                defaultValue={this.props.Data.description}
                onChange={this.handleChange}
              />
            </Paper>
            <Paper
              className="actionButtons"
              style={{
                backgroundColor: `${this.props.Data.color}`,
              }}
            >
              <div className="iconandcancel">
                <div className="updateicon">
                  <Icons />
                </div>
                <div>
                  <Tooltip title="Close">
                    <Button
                      margin="dense"
                      size="small"
                      color="primary"
                      className="updatebutton"
                      onClick={this.Updatenote}
                    >
                      Close
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </Paper>
          </Card>
        </Dialog>
      </div>
    );
  }
}
export default UpdateNotes;

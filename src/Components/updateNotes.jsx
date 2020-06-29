import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import "../CSS/dashboard.css";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import {Button,Snackbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Icons from "./icons";
import Images from "../Assets/images.png";
import Card from '@material-ui/core/Card';
import Blackpin from "../Assets/Blackpin.png";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class UpdateNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId:"",
      title:"",
      description:""
      // open:this.state.Open
    };
    this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    let Data=this.props.Data;
    console.log("Didmount props data",this.props.Data);
     this.setState({noteId:Data.id,
     title:Data.title,
      description:Data.description
     });
    //  console.log("Didmount data",this.state);
  }
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log("handlechanhe set",this.state);
    
  }  
  Updatenote=()=>{
    let data={
      noteId:this.props.Data.id,
      title:this.state.title,
      description:this.state.description
    }
    console.log("data desc",data);
    let token = localStorage.getItem("Token");
    services.UpdateNotes(token,data).then((json)=>{
      console.log('Updated data', json);
    }).catch((err)=>{
      console.log(err);
    })
    this.props.close();
  }

 handleClickOpen = () => {
    this.setState({
        open:this.props.Open
    });
    console.log(this.props);
  };

 handleClose = () => {
    
  };

  render() {
    console.log("props",this.props.Data);
    return (
        <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={this.props.Open}
        onClose={this.handleClose}
      >
       <Card className="wholeNoteCard" onClick={this.clickNote}>
          <Paper className="titleAndPin">
            <InputBase
              className="wholeTitle"
              name="title"
              color="white"
              placeholder="Title"
              style={{ width: "80%" }}
              defaultValue={this.props.Data.title}
              // value={this.state.title}
              onChange={this.handleChange}
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
              style={{ width: "80%" }}
              placeholder="Take a note..."
              defaultValue={this.props.Data.description}
              // value={this.state.description}
              onChange={this.handleChange}
            />
          </Paper>
          <Paper className="actionButtons">
            <div className="iconbutton">
             <Icons/>
              <Tooltip className="cancelButton" title="Close">
              <Button
                margin="dense"
                size="small"
                color="primary"
                onClick={this.Updatenote}
              >
                Close
              </Button>
            </Tooltip>
            </div>
          </Paper>
        </Card>
      </Dialog>
    </div>
    )
    }
}
export default UpdateNotes;
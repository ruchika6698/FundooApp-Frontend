import React, { Component } from 'react';
import { MenuItem, Popper, Paper, Fade, Tooltip, ClickAwayListener, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import moreMenu from "../Assets/moreMenu.svg";
import IconButton from "@material-ui/core/IconButton";
import "../CSS/dashboard.css";
import {Button, Snackbar } from "@material-ui/core";
import AddLabel from "./addLable";
import NotesService from "../Services/notesServices";
let services = new NotesService();

class MoreOptions extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            snackbarOpen: false,
            snackbarMsg: "",
        }
        this.clickMoreOptions = this.clickMoreOptions.bind(this);
        this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
        this.handleLabelsOnNote = this.handleLabelsOnNote.bind(this);
    }
    clickMoreOptions(event) {
        try{
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    }catch(err){
        console.log("error in more options");
    }
    }
    snackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };
  
    handleDeleteNotes = () => {
        let token = localStorage.getItem("Token");
        let requestData = {
        noteIdList: [this.props.noteId.id],
        isDeleted: true,
        };
        console.log("request data",requestData);
        services.DeleteNotes(token,requestData).then((json) => {  
        console.log("responce data==>",json);
        if(json.data.data.success === true){  
        this.setState({
              snackbarOpen: true,
              snackbarMsg: "Delete Suceesful..!",
            });  
    }  
    })  
    };

    closeLabelPopper() {
        this.setState({
            open: false
        })
    }
    handleLabelsOnNote(e) {
        this.setState({
            open: false
        })
        this.moreOptionsToAddLabels.current.addLabelPopup(e);
    }
    render() {
        const { anchorEl, open } = this.state;
        return (
                <div>
                <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
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
                    <Tooltip title="More Options">
                        <img src={moreMenu} onClick={this.clickMoreOptions} />

                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={'bottom'} transition style={{ position: "fixed" }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={0}>
                                <Paper className="moreOptionsPopper" >
                                    <ClickAwayListener onClickAway={() => this.closeLabelPopper()}>
                                        <div id="selectMoreOptions">

                                            <MenuItem id="moreOptionsMenu" onClick={this.handleDeleteNotes}>Delete Note</MenuItem>
                                            <MenuItem id="moreOptionsMenu"><AddLabel>Add Label</AddLabel></MenuItem>

                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
        )
    }
}
export default MoreOptions;
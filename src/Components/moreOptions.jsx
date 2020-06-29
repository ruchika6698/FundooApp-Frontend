import React, { Component } from 'react';
import { MenuItem, Popper, Paper, Fade, Tooltip, ClickAwayListener, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../CSS/dashboard.css";
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
        alert('Record deleted successfully!!');  
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
                    <Tooltip title="More Options">
                        <MoreVertIcon onClick={this.clickMoreOptions} />

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
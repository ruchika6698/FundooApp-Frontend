import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { Tooltip } from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { Divider, IconButton } from "@material-ui/core";
import React, { Component } from 'react';

class ArchiveNotes extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        anchorEl: null
    };

    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose1 = () => {
        this.setState({
            opensnackbar: false
        });
    };


    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    handleaddArchiveChange = () => {
        
    };

    render() {

        return (
            <div >
                <Tooltip title=" Archive">
                    <ArchiveOutlinedIcon onClick={this.handleaddArchiveChange} />
                </Tooltip>
            </div>
        );
    }
}


export default ArchiveNotes;
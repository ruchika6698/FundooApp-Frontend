import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Tooltip } from "@material-ui/core";

import Button from '@material-ui/core/Button';

class DeleteNote extends React.Component {
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

    handleTrashNotes = () => {
    
    };

    render() {

        return (
            <div className={this.props.view ? (null) : ("footerpadding")} >
                <Tooltip title="Delete Note">
                    <div onClick={this.handleTrashNotes} >Delete Note</div>
                </Tooltip>

            </div>
        );
    }
}


export default DeleteNote;
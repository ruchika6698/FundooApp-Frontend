import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { Tooltip } from "@material-ui/core";
import React, { Component } from 'react';

class ArchiveNotes extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div >
                <Tooltip title=" Archive">
                    <ArchiveOutlinedIcon />
                </Tooltip>
            </div>
        );
    }
}


export default ArchiveNotes;
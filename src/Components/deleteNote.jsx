import React from "react";
import { Tooltip } from "@material-ui/core";

class DeleteNote extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        return (
            <div >
                <Tooltip title="Delete Note">
                    <div >Delete Note</div>
                </Tooltip>

            </div>
        );
    }
}

export default DeleteNote;
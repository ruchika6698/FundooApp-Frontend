import React, { Component } from 'react';
import "../CSS/dashboard.css";
import Card from '@material-ui/core/Card';
import IconButton from "@material-ui/core/IconButton";
import InputBase from '@material-ui/core/InputBase'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import CheckList from './checkList'


class TakeNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: "",
            description: "",
            checkListhide:"checkhide",
            checkListShow:"checkshow"
        };
    }



    render() {
        return (
            <Card className="wholeMiniNoteCard">
                <div className="miniNote">
                    <div className="takeNote">
                        <InputBase
                            className="miniNote"
                            style={{ width: "80%" }}
                            placeholder="Take a Note..."
                            onClick={this.props.handleClick}
                        />
                    </div>

                    <div className="miniIcons">
                        <IconButton >
                            <Tooltip title="New List">
                                <CheckBoxOutlinedIcon onClick={this.props.setCheckList} />
                            </Tooltip>
                        </IconButton>

                        <IconButton >
                            <Tooltip title="New note with drawing">
                                <BrushOutlinedIcon />
                            </Tooltip>
                        </IconButton>

                        <IconButton>
                            <Tooltip title="New note with image">
                                <PhotoLibraryOutlinedIcon />
                            </Tooltip>
                        </IconButton>
                    </div>
                </div>
            </Card >
        );
    }
}
export default TakeNote;
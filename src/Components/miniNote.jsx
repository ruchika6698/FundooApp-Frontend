import React, { Component } from 'react';
import '../CSS/note.css';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkIcon from '@material-ui/icons/Link';
import InputBase from '@material-ui/core/InputBase'
import UndoTwoToneIcon from '@material-ui/icons/UndoTwoTone';
import RedoTwoToneIcon from '@material-ui/icons/RedoTwoTone';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import Tooltip from '@material-ui/core/Tooltip';


class MiniNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: "",
            description: "",
        };
    }

    render() {
        return (
            <Card className="wholeMiniNoteCard">
                <div className="miniNote">
                    <div className="takeNote">
                        <InputBase
                            className="miniNote"
                            placeholder="Take a Note..."
                            onClick={this.props.handleClick}
                        />
                    </div>

                    <div className="miniIcons">
                        <IconButton >
                            <Tooltip title="New List">
                                <CheckBoxOutlinedIcon />
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

export default MiniNote;
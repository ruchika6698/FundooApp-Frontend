import React, { Component } from 'react';
import '../CSS/note.css';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import StyledMenuItem from '@material-ui/core/StyledMenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListItemText from '@material-ui/core/ListItemText'
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
import ListDropDown from './listDropDown'
import Images from '../Assets/images.png';
import Blackpin from '../Assets/Blackpin.png';


class WholeNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openImg: false,
            imagetrue:true
        };
    }

    state = {
        anchorEl: null
    };
     handleToggle = () => {
      this.setState({ openImg: !this.state.openImg });
      console.log(this.state.openImg);
    }
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };


    handleDrawer = event => {

        this.props.openDrawer();

        const { currentTarget } = event;
        this.setState({
            AnchorEl: currentTarget,
            open: !this.state.open
        });
    };
    render() {
        return (
        <div className="wholeCard">
            <Paper className="wholeNoteCard" onClick={this.clickNote}>
                <Paper className='titleAndPin'>
                    <InputBase
                        className="wholeTitle"
                        name="title"
                        color="white"
                        placeholder="Title"
                        value={this.props.title}
                        onChange={this.props.handleChangeText}
                        InputProps={{
                            disableUnderline: true
                        }}
                    />
                    {this.state.openImg  !== true ? (
                    <Tooltip title="Pin note">
                      <img
                        className="pinImage"
                        src={Images}
                        alt="pin logo"
                        width="50" height="40"
                         onClick={this.handleToggle}
                      ></img>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Pin note">
                      <img
                        className="pinImage"
                        src={Blackpin}
                        alt="pin logo"
                        width="40" height="30"
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
                        placeholder="Take a note..."
                        value={this.props.description}
                        onChange={this.props.handleChangeText}
                    />
                </Paper>

                <Paper className="actionButtons">
                    <IconButton aria-label="Remind me">
                        <Tooltip title="Reminde me">
                            <AddAlertIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Collaborator">
                        <Tooltip title="Collaborator">
                            <PersonAddIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Change color">
                        <Tooltip title="Change color">
                            <ColorLensIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Add image">
                        <Tooltip title="Add image">
                            <ImageIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Archive note">
                        <Tooltip title="Archive">
                            <ArchiveIcon />
                        </Tooltip>
                    </IconButton>


                    <IconButton aria-label="More">
                        <Tooltip title="More">
                            <ListDropDown />
                        </Tooltip>
                    </IconButton>

                    {/* <IconButton aria-label="pen link">
                        <LinkIcon />
                    </IconButton> */}

                    <IconButton aria-label="Undo">
                        <Tooltip title="Undo">
                            <UndoTwoToneIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Redo">
                        <Tooltip title="Redo">
                            <RedoTwoToneIcon />
                        </Tooltip>
                    </IconButton>
                    <Tooltip title="Close">
                            <Button
                                className="cancelButton"
                                margin="dense"
                                size="small"
                                color="primary"
                                onHandleClickaway={this.props.onHandleClickaway}
                            >Close</Button>
                        </Tooltip>
                </Paper>
            </Paper >
        </div>
        );
    }
}

export default WholeNote;
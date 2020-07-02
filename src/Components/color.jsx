import React, { Component } from 'react';
import { Tooltip, IconButton, MenuItem, Menu, Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { height } from '@material-ui/system';
import colorPalette from "../Assets/colorPalette.svg";
import Notestitle from "./notesTitle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import NotesService from "../Services/notesServices";
let services = new NotesService();

    const theme = createMuiTheme({
        overrides: {
            MuiMenu: {
                paper: {
                    "height": "auto",
                    "width": "139px",
                    // "borderRadius":"5px",
                    "justify-content":"space-around"
                }
            }
        }
    })
    
class ColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            colorArray: [
                '#F8F4F4',
                '#F38A8A',
                '#F3B28A',
                '#F3EB8A',
                '#BAF38A',
                '#8AF3E1',
                '#8AAAF3',
                '#FDCFE8',
                '#900C3F',
                '#AB959E',
                '#C3D5F8',
                '#D6F8BD',
            ],
            selected: '#FFFFFF',
            open: false,
        }
    }
    handleToggle() {
        this.setState({ open: true})
    }
    closePopper() {
        this.setState({
            open: false
        })
    }
    handleColor = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    updateColor = (color) => {
        this.setState({ anchorEl: null });
        this.setState({
			selected: color,
		},()=>{
            let colorData = {
                noteIdList: [this.props.noteId.id],
                color: this.state.selected
            }
            console.log("Color data",colorData);
            let token = localStorage.getItem("Token");
            services.changeColor(token,colorData)
                .then((json) => {
                    console.log('color response', json);
                })
                .catch((error) => {
                    console.log('color error', error);
                })
                this.props.refreshID();
            });
    };

    render() {
        const color = this.state.colorArray.map((key, index) => {
            return (
                <div className="color"
                style={{
                    margin: "1px",
                    backgroundColor: key,
                    // borderStyle: "solid",
                    alignItems:"center",
                    cursor: "pointer",
                    // borderWidth: "1px",
                    height: "28px",
                    width: "28px"
                }}
                    onClick={() => this.updateColor(key)}
                ></div>
            )
        })
        return (
            <div>
                <Tooltip title="Change color">
                    <IconButton
                        aria-owns={this.state.anchorEl ? 'color-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleColor}
                        // onMouseEnter={this.handleColor}
                        // onMouseLeave={this.handleClose}
                    >
                        <img src={colorPalette} label="Color Palette" />
                    </IconButton>
                </Tooltip>
                <MuiThemeProvider theme={theme}>
                <Menu
                    id="color-menu"
                    anchorEl={this.state.anchorEl}
                    placement={'bottom'}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    alignItems="center"
                    style={{ width: "100%" }}
                >
                    <Grid className="colorgrid">
                        {color}
                    </Grid>
                </Menu>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ColorComponent;
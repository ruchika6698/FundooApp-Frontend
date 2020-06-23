import React from "react";
import "../CSS/dashboard.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import keeplogo from "../Assets/logo.svg";
import keep1 from "../Assets/keep1.svg";
import gridview from "../Assets/grid.svg";
import SearchIcon from "@material-ui/icons/Search";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Tooltip } from "@material-ui/core";
import KeepLogo from '../Assets/KeepLogo.png'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from '@material-ui/icons/Apps';
import DropDown from "./dropDown";

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "13%"
            }
        },

        PersistentDrawerLeft: {
            drawer: {
                width: "100%"
            }
        }
    }
});

export class Dashboard extends React.Component {
  constructor(props) {
        super(props);

        this.state = {

            userprofile: false,
            allNote: [],
            SearchData: "",
            list: false
        };
    }

  render() {
        return (
            <div className="toolbarbackground">
                <div className="mainDashboard">
                    <MuiThemeProvider theme={theme}>
                        <AppBar position="fixed">
                            <Toolbar className="toolbar">
                                <div className="keepAndLogo">
                                    <div>
                                        <DropDown
                                            showNoteclick={this.handleShowAllNotes}
                                            archiveclick={this.handleShowAllArchiveNote}
                                            {...this.props}
                                        />
                                    </div>

                                    <div>
                                        <img src={KeepLogo} alt="Kepp Logo" />
                                    </div>

                                    <Typography
                                        className="keep"
                                        variant="h6"
                                        noWrap
                                    >
                                     Fundoo
                                    </Typography>
                                </div>
                                <div className="dashboardSearch">
                                    <div className="dashboardsearchicon">
                                        <SearchIcon onClick={this.getAllSearchNotes} />
                                    </div>
                                    <div style={{ width: "90%", height: "1.7vh" }}>
                                        <TextField
                                            color="white"
                                            placeholder="Search…"
                                            onChange={this.getAllSearchNotes}
                                            id="standard-full-width"
                                            multiline
                                            fullWidth
                                            margin="normal"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="logokeep1">
                                    <Tooltip title="Refresh">
                                        <RefreshOutlinedIcon />
                                    </Tooltip>
                                    {this.props.view !== true ? (
                                        <Tooltip title="Grid view ">
                                            <img
                                                src={gridview}
                                                width="22px"
                                                height="22px"
                                                onClick={() => this.props.toggleView()}
                                            ></img>
                                        </Tooltip>
                                    ) : (
                                            <Tooltip title="Grid view ">
                                                <img
                                                    src={keep1}
                                                    width="22px"
                                                    height="22px"
                                                    onClick={() => this.props.toggleView()}
                                                ></img>
                                            </Tooltip>
                                        )}
                                    <Tooltip title="Settings">
                                        <SettingsOutlinedIcon />
                                    </Tooltip>
                                </div>
                                <div className="acoounts">
                                    <Tooltip title="Fundoo Apps">
                                        <AppsIcon />
                                    </Tooltip>

                                    <Tooltip title="Fundoo Account">
                                        <AccountCircleIcon />
                                    </Tooltip>
                                </div>
                                </Toolbar>
                        </AppBar>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

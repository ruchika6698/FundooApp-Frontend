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
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";
import KeepLogo from "../Assets/KeepLogo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { Menu, MenuItem } from '@material-ui/core'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openImg: false,
      imagetrue:true
    };
  }
   handleToggle = () => {
      this.setState({ openImg: !this.state.openImg });
      console.log(this.state.openImg);
    }
  render() {
    return (
      <div className="toolbarbackground">
        <div className="mainDashboard">
          <MuiThemeProvider >
            <AppBar position="fixed">
              <Toolbar className="toolbar">
                <div className="keepAndLogo">
                  <div>
                    <IconButton >
                      <Tooltip title="Menu">
                      <MenuIcon />
                    </Tooltip>
                    </IconButton>
                  </div>

                  <div>
                    <img src={KeepLogo} alt="Kepp Logo" />
                  </div>
                  <Typography className="keep" variant="h6" noWrap>
                    Fundoo
                  </Typography>
                </div>
                <div className="dashboardSearch">
                  <div className="dashboardsearchicon">
                    <SearchIcon />
                  </div>
                  <div className="search">
                    <TextField
                      placeholder="Search"
                      onChange={this.getAllSearchNotes}
                      id="standard-full-width"
                      multiline
                      fullWidth
                      margin="normal"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                </div>
                <div className="logokeep1">
                  <Tooltip title="Refresh">
                    <RefreshOutlinedIcon />
                  </Tooltip>
                  {this.state.openImg  !== true ? (
                    <Tooltip title="Grid view ">
                      <img
                        src={gridview}
                        width="22px"
                        height="22px"
                         onClick={this.handleToggle}
                      ></img>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Grid view ">
                      <img
                        src={keep1}
                        width="22px"
                        height="22px"
                        onClick={this.handleToggle}
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
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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
import { Menu, MenuItem } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import "../CSS/dashboard.css";

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openimage, setOpenimage] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    this.setState({ openImg: !this.state.openImg });
    console.log(this.state.openImg);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="{classes.root}">
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <img src={KeepLogo} alt="Kepp Logo" />
          </div>
          <div className="keep">
            <Typography className="keep" variant="h6" noWrap>
              Fundoo
            </Typography>
          </div>
          <div className="searchbar">
          <div className="dashboardSearch">
            <div className="dashboardsearchicon">
              <SearchIcon />
            </div>
            <div className="search">
              <TextField
                placeholder="Search"
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
          </div>
          <div className="logokeep1">
            <div className="refresh">
            <Tooltip title="Refresh">
              <RefreshOutlinedIcon />
            </Tooltip>
            </div>
            <div className="grid">
            {/* {this.state.openImg  !== true ? ( */}
            <Tooltip title="Grid view ">
              <img
                src={gridview}
                width="22px"
                height="22px"
                //  onClick={this.handleToggle}
              ></img>
            </Tooltip>
            {/* ) : (
            <Tooltip title="Grid view ">
              <img
                src={keep1}
                width="22px"
                height="22px"
                // onClick={this.handleToggle}
              ></img>
            </Tooltip>
            {/* )} */}
            </div>
        </div>
        <div className="setting">
            <Tooltip title="Settings">
              <SettingsOutlinedIcon />
            </Tooltip>
          </div>
        <div className="tool">
          <div className="acoounts">
            <Tooltip title="Fundoo Apps">
              <AppsIcon />
            </Tooltip>

            <Tooltip title="Fundoo Account">
              <AccountCircleIcon />
            </Tooltip>
          </div>
        </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <List class="icons">
          {["Notes", "Reminders", "Edit labels", "Archive", "Trash"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <EmojiObjectsIcon value="notes" />
                  ) : index === 1 ? (
                    <NotificationsOutlinedIcon value="reminders" />
                  ) : index === 2 ? (
                    <EditOutlinedIcon />
                  ) : index === 3 ? (
                    <ArchiveOutlinedIcon />
                  ) : (
                    <DeleteOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

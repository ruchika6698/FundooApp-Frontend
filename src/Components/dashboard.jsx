import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import gridview from "../Assets/grid.svg";
import SearchIcon from "@material-ui/icons/Search";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import TextField from "@material-ui/core/TextField";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";
import KeepLogo from "../Assets/KeepLogo.png";
import Drawer from "@material-ui/core/Drawer";
import {Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import "../CSS/dashboard.css";
import Note from './createNote';
import Profile from "./profile";

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openimage, setOpenimage] = React.useState(false);

  const handleDrawerMouseopen=()=>{
    setOpen(true);
  }
  const handleDrawerMouseClose=()=>{
    setOpen(false);
  }
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
            className={clsx(classes.menuButton
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className="keepimage">
            <img src={KeepLogo} alt="Keep Logo" />
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
            <Tooltip title="Refresh">
              <RefreshOutlinedIcon />
            </Tooltip>
            {/* {this.state.openImg  !== true ? ( */}
            <Tooltip title="Grid view ">
              <img
                className="gridimage"
                src={gridview}
                width="22px"
                height="22px"
                alt="grid view"
                //  onClick={this.handleToggle}
              ></img>
            </Tooltip>
            {/* ) : (
            <Tooltip title="Grid view ">
              <img
                src={keep1}
                width="22px"
                height="22px"
                alt="grid view"
                // onClick={this.handleToggle}
              ></img>
            </Tooltip>
            {/* )} */}
          </div>
        <div className="tool">
          <div className="acoounts">
            <Tooltip title="Fundoo Account">
              <Profile />
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
         <List  onMouseEnter={handleDrawerMouseopen}
          onMouseLeave={handleDrawerMouseClose}>
          <ListItem button key={'Notes'} className="notes">
            <Link to="/dashboard/notes"><ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon></Link>
            <ListItemText primary={'Notes'}/>
          </ListItem>
          <ListItem button key={'Remainders'} className="remainder">
            <ListItemIcon><NotificationsOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Remainders'}/>
          </ListItem>
          <ListItem button key={'Editlabels'} className="editlabels">
            <ListItemIcon>< EditOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Edit labels'}/>
          </ListItem>
          <ListItem button key={'Archive'} className="archive">
            <ListItemIcon><ArchiveOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Archive'}/>
          </ListItem>
          <ListItem button key={'Trash'} className="trash">
            <ListItemIcon>< DeleteOutlinedIcon/></ListItemIcon>
            <ListItemText primary={'Trash'}/>
          </ListItem>         
        </List>  
      </Drawer>
      <div className="notesbox">
      <Note/>
    </div>
    </div>
  );
}

const drawerWidth = 300;

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
    width: "60px",
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
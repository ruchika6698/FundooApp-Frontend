import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import gridview from "../Assets/grid.svg";
import notes from "../Assets/notes.svg";
import reminder from "../Assets/reminder.svg";
import editLabel from "../Assets/editLabel.svg";
import archiveDrawer from "../Assets/archiveDrawer.svg";
import trash from "../Assets/trash.svg";
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
import "../CSS/dashboard.css";
import { GetAllNotes} from './getAllNotes'
import { GetTrashNotes} from './getTrash'
import { GetArchieved} from './getArchieved'
import {PrivateRoute} from "../Authguard/privateroute"
import Profile from "./profile";

export default function Dashboard() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [openimage, setOpenimage] = React.useState(false);

  const handleDrawerMouseopen=()=>{
    setOpen(true);
  }
  const handleDrawerMouseClose=()=>{
    setOpen(false);
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // const handleToggle = () => {
  //   this.setState({ openImg: !this.state.openImg });
  //   console.log(this.state.openImg);
  // };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="{classes.root}">
      <CssBaseline />
      <AppBar
        position="fixed"
        color="#FFFFFF"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            onClose={handleDrawerClose}
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
            <Tooltip title="Grid view " className="gridimage">
              <img
                className="gridimage"
                 src={gridview}
                width="22px"
                height="22px"
                alt="grid view"
              ></img>
            </Tooltip>
          </div>
        <div className="tool">
          <div className="acoounts">
              <Profile />
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
            <Link to="/notes"><ListItemIcon>
            <img src={notes} label="Notes" alt="Notes"/> </ListItemIcon></Link>
            <ListItemText primary={'Notes'}/>
          </ListItem>
          <ListItem button key={'Remainders'} className="remainder">
            <ListItemIcon><img src={reminder} label="Add reminder" alt="Add reminder" /></ListItemIcon>
            <ListItemText primary={'Remainders'}/>
          </ListItem>
          <ListItem button key={'Editlabels'} className="editlabels">
            <ListItemIcon><img src={editLabel} label="Edit labels" alt="Edit labels"/></ListItemIcon>
            <ListItemText primary={'Edit labels'}/>
          </ListItem>
          <ListItem button key={'Archive'} className="archive">
            <Link to="/archive"><ListItemIcon><img src={archiveDrawer} label="Archive" alt="Archive"/></ListItemIcon></Link>
            <ListItemText primary={'Archive'}/>
          </ListItem>
          <ListItem button key={'Trash'} className="trash">
            <Link to="/trash"><ListItemIcon><img src={trash} label="Trash" alt="Trash"/></ListItemIcon></Link>
            <ListItemText primary={'Trash'}/>
          </ListItem>         
        </List>  
      </Drawer>
      <div className={open? 'MainBodyOpen' : 'MainBodyClose'}>
      <switch>
									<PrivateRoute
										path={"/notes"}
										component={GetAllNotes}
									/>
									<PrivateRoute
										path={"/trash"}
										component={GetTrashNotes}
									/>
									<PrivateRoute
										path={"/archive"}
										component={GetArchieved}
									/>
								</switch>
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
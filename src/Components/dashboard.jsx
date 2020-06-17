import React from 'react';
import {AppBar,ToolBar,IconButton,Typography,Button} from '@material-ui/core'
import {Menu,AccountCircle} from '@material-ui/icons'

export default function Dashboard() {
  const [open,setOpen]=useState(false)
  const handledrawer=()=>{
    setOpen(true)
  }
  return(
  <div>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
          <Typography  variant="h6" style={{flexGrow:1}}>
            Material-UI
          </Typography>
          <Button color="inherit" > Login </Button>
          <Button color="inherit" > Register </Button>
          <IconButton  color="inherit" aria-label="account">
          <AccountCircle />
         </IconButton>
         </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={open}
          onClose={()=>setOpen(false)}
        >
          <div style={{height:"100%", width:"100px"}}>
            <h3>Fundoo Keep</h3>
          </div>
        </Drawer>
    </div>

 );
}
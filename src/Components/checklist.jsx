import React from 'react';
import {TextField, Button,Checkbox,ClickAwayListener, Icon,IconButton} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import { useEffect } from 'react';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Icons from "./icons";
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import NotesService from "../Services/notesServices";
let services = new NotesService();


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width : '40em'
    },
    // search bar field  
    underline: {
        "&&&:before": {
        borderBottom: "none"
        },
        "&&:after": {
        borderBottom: "none"
        }
    },
}));

export default function CheckList(props){
    // variables
    const classes = useStyles();
    const [title,setTitle] = React.useState();
    const [CheckListData,setCheckListData] = React.useState([]);
    const [snackbarVariables,setSnackbar] = React.useState([]);

    const [checkList,setCheckList] =React.useState([""]);
    const [isCheckList, setAsChecklist]=React.useState(true);
    const [clearIcon,setClearIcon] = React.useState(true)

    const [hasImage,setHasImage] = React.useState(true);
    const [open,setOpen] = React.useState(false)
    const [anchorEl,setAnchorEl] = React.useState("")
    const [selsectedImage,setImage] = React.useState();

    // on title change hnadler
    const onTitleChange = eve =>{
        setTitle(eve.target.value)
    }
    // on body change handler
    const onCheckListDataChange = eve =>{
        setCheckListData(eve.target.value)
    }
    // snackbar handlers
   const handleClose = (eve) =>{
        setSnackbar({
            open:false,
            message :'',
            servicity:'',
        });
    }
    const handleToggle=()=> {
        setOpen({ open: true})
    }
    const closePopper=()=> {
        setOpen({
            open: false
        })
    }
    const handleColor = (event) => {
        setAnchorEl({ anchorEl: event.currentTarget })
    }
    const AddList = ()=>{
        let ChecknewArr = [...checkList]; 
        if(ChecknewArr.length >=2 && ChecknewArr[ChecknewArr.length-2 !=='']){
            let temporary = ChecknewArr[ChecknewArr.length-1];
            ChecknewArr[ChecknewArr.length -1] = "";       
            ChecknewArr[ChecknewArr.length] = temporary;
            setCheckList(ChecknewArr); 
        }
        else{
            let temporary = ChecknewArr[ChecknewArr.length-1];   
            ChecknewArr[ChecknewArr.length -1] = "";          
            ChecknewArr[ChecknewArr.length] = temporary;      
            setCheckList(ChecknewArr);
            
        }
    }
    const onListChange = index => eve => {
            let ChecknewArr = [...checkList]; 
            ChecknewArr[index] = { value :  eve.target.value,
                              isChecked : (ChecknewArr[index].isChecked !== undefined) ? ChecknewArr[index].isChecked : false}
            setCheckList(ChecknewArr); 
    };
    const CheckBoxhandler = index => eve =>{
        let ChecknewArr = [...checkList]; 
        ChecknewArr[index] = {   value : ChecknewArr[index].value,
                            isChecked : !ChecknewArr[index].isChecked }
        setCheckList(ChecknewArr);
    }
    let isClickOn = false;
    const clearIconOnHover = ()=>{        
        setClearIcon(true);
    }
    const clearIconOffhover = ()=>{
        if(!isClickOn){
            setClearIcon(false);
        }
    }
    const clearIconClick = ()=>{
        isClickOn = true;
        setClearIcon(true)
    }
    const clarClickAway = ()=>{
        isClickOn = false;
        setClearIcon(false)
    }
    
    const AddcheckList=()=>{
        let token = localStorage.getItem("Token");
    let requestData = {
      title: setTitle,
      CheckListData: setCheckListData,
      file: this.state.file,
      // collaberators:JSON.Stringify(this.state.collaberators),
      // color:this.state.color
    };
    services
      .CreateNote(token, requestData)
      .then((json) => {
        console.log(" Create notes Successful ", json);
      })
      .catch((err) => {
        console.log(err);
      });
      this.handleClose();
    }
    const checkOpen=()=>{
        setOpen(true);
    }
    return(
        <div className={`wholeCard ${props.hide}` } >         
                <IconButton
                        aria-owns={anchorEl ? 'color-menu' : undefined}
                        aria-haspopup="true"
                        // onClick={handleColor}
                    >
                                <CheckBoxOutlinedIcon onClick={checkOpen}/>
                       </IconButton>
            <Card className="wholeNoteCard" >
          <Paper className="titleAndPin">
            <div className="wholeTitle">
                <TextField
                    id='tittle'
                    multiline
                    placeholder='Title'                            
                    textdecaration='none'
                    InputProps={{ classes }}  
                    onChange={onTitleChange} 
                    value={title}                
                />       
            </div>  
            <div  className="wholeTitle">
            { true ? 
                checkList.map((values,index)=>{
                        if(index === checkList.length-1){
                          return( <div className='listField'>
                                 <TextField
                                    className='takeNote'                                
                                    placeholder="+   List item"                            
                                    textdecaration='none'
                                    InputProps={{ classes }}  
                                    onClick={AddList}           
                                />     
                            </div>
                          )
                        }
                        else{
                            return(     
                                <ClickAwayListener onClickAway ={clarClickAway} className='ClickAwayListener'>
                                <div className='CheckListFields' onMouseEnter = {clearIconOnHover} onMouseLeave={clearIconOffhover} onClick={clearIconClick} >                          
                                    <div>
                                        <Checkbox  checked={values.isChecked} onChange={CheckBoxhandler(index) }   style={{color : 'black'}}/>
                                    </div>
                                    
                                    <div>
                                        <TextField
                                            className='takeNote'
                                            fullWidth
                                            multiline
                                            placeholder='Take a Note'                            
                                            textdecaration='none'
                                            name={index}
                                            InputProps={{ classes }}  
                                            value={values.value}    
                                            onChange={onCheckListDataChange}             
                                        />          
                                    </div>
                                    <div>
                                        <IconButton fontSize='small'>
                                        {clearIcon ? <ClearOutlinedIcon fontSize='small'/> : undefined}
                                        </IconButton>
                                    </div>
                                </div>
                                </ClickAwayListener>
                            );
                        }
                })    
                : undefined             
            }
            </div>
            <div className="iconbutton">
              <Icons
                source="noteTitle"
              />
              <Tooltip className="cancelButton" title="Close">
                <Button margin="dense" size="small"  onClick={AddcheckList}>
                  Close
                </Button>
              </Tooltip>
            </div>         
             </Paper>
        </Card>
        </div>
    );
}
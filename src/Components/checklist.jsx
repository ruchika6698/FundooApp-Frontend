// import React from 'react';
// import {TextField, Button,Checkbox,ClickAwayListener, Icon,IconButton} from '@material-ui/core'
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import { useEffect } from 'react';
// import Icons from "./icons";
// import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
// import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       width : '40em'
//     },
//     // search bar field  
//     underline: {
//         "&&&:before": {
//         borderBottom: "none"
//         },
//         "&&:after": {
//         borderBottom: "none"
//         }
//     },
// }));

// export default function Note(props){
//     // variables
//     const classes = useStyles();
//     const [title,setTitle] = React.useState();
//     const [bodyText,setBodyText] = React.useState();
//     const [snackbarVariables,setSnackbar] = React.useState([]);

//     const [checkList,setCheckList] =React.useState([""]);
//     const [isCheckList, setAsChecklist]=React.useState(true);
//     const [clearIcon,setClearIcon] = React.useState(true)

//     const [hasImage,setHasImage] = React.useState(true);
//     const [selsectedImage,setImage] = React.useState();

//     // on title change hnadler
//     const onTitleChange = eve =>{
//         setTitle(eve.target.value)
//     }
//     // on body change handler
//     const onBodyTextChange = eve =>{
//         setBodyText(eve.target.value)
//     }
//     // snackbar handlers
//    const handleClose = (eve) =>{
//         setSnackbar({
//             open:false,
//             message :'',
//             servicity:''
//         });
//     }
//     const AddList = ()=>{
//         let newArr = [...checkList]; 
//         if(newArr.length >=2 && newArr[newArr.length-2 !=='']){
//             let temporary = newArr[newArr.length-1];
//             newArr[newArr.length -1] = "";       
//             newArr[newArr.length] = temporary;
//             setCheckList(newArr); 
//         }
//         else{
//             let temporary = newArr[newArr.length-1];   //temp = dis -> arr[0]
//             newArr[newArr.length -1] = "";          // arr[0] -> ''
//             newArr[newArr.length] = temporary;      // arr[1]-> temp -> dis 
//             setCheckList(newArr);
            
//         }
//     }
//     const onListChange = index => eve => {
//             let newArr = [...checkList]; 
//             newArr[index] = { value :  eve.target.value,
//                               isChecked : (newArr[index].isChecked !== undefined) ? newArr[index].isChecked : false}
//             setCheckList(newArr); 
//     };
//     const CheckBoxhandler = index => eve =>{
//         let newArr = [...checkList]; 
//         newArr[index] = {   value : newArr[index].value,
//                             isChecked : !newArr[index].isChecked }
//         setCheckList(newArr);
//     }
//     let isClickOn = false;
//     const clearIconOnHover = ()=>{        
//         setClearIcon(true);
//     }
//     const clearIconOffhover = ()=>{
//         if(!isClickOn){
//             setClearIcon(false);
//         }
//     }
//     const clearIconClick = ()=>{
//         isClickOn = true;
//         setClearIcon(true)
//     }
//     const clarClickAway = ()=>{
//         isClickOn = false;
//         setClearIcon(false)
//     }
//     const Getimage = (imageUrl)=>{
//         console.log('image urls: ' ,imageUrl)
//         setImage(imageUrl);
//     }
    
//     return(
//         <div className='noteCotainer'>
//             <Snackbar open={snackbarVariables.open} autoHideDuration={6000} onClose={handleClose}>
//                     <Alert onClose={ handleClose } severity={snackbarVariables.servicity}>
//                         {snackbarVariables.message}
//                     </Alert>
//             </Snackbar>                       
//             <div>
//                 {Boolean(selsectedImage) ? 
//                     <img src={selsectedImage} alt='Curently image is not available' />
//                     : undefined
//                 }
//             </div>

//             <div className='textFieldContainer'>
//                 <TextField
//                     id='tittle'
//                     multiline
//                     placeholder='Title'                            
//                     textdecaration='none'
//                     InputProps={{ classes }}  
//                     onChange={onTitleChange} 
//                     value={title}                
//                 />       
//             </div>  
//             <div>
//             { (props.checklist) ? 
//                 checkList.map((values,index)=>{
//                         if(index === checkList.length-1){
//                           return( <div className='listField'>
//                                  <TextField
//                                     className='takeNote'                                
//                                     placeholder="+   List item"                            
//                                     textdecaration='none'
//                                     InputProps={{ classes }}  
//                                     onClick={AddList}           
//                                 />     
//                             </div>
//                           )
//                         }
//                         else{
//                             return(     
//                                 <ClickAwayListener onClickAway ={clarClickAway} className='ClickAwayListener'>
//                                 <div className='CheckListFields' onMouseEnter = {clearIconOnHover} onMouseLeave={clearIconOffhover} onClick={clearIconClick} >                          
//                                     <div>
//                                         <Checkbox  checked={values.isChecked} onChange={CheckBoxhandler(index) }   style={{color : 'black'}}/>
//                                     </div>
                                    
//                                     <div>
//                                         <TextField
//                                             className='takeNote'
//                                             fullWidth
//                                             multiline
//                                             placeholder='Take a Note'                            
//                                             textdecaration='none'
//                                             name={index}
//                                             InputProps={{ classes }}  
//                                             value={values.value}    
//                                             onChange={onListChange(index)}             
//                                         />          
//                                     </div>
//                                     <div>
//                                         <IconButton fontSize='small'>
//                                         {clearIcon ? <ClearOutlinedIcon fontSize='small'/> : undefined}
//                                         </IconButton>
//                                     </div>
//                                 </div>
//                                 </ClickAwayListener>
//                             );
//                         }
//                 })                 
//             }
//             </div>
//             <div className='iconSet' >  
//                     <div className='noteIconsContainer'> <Icons /> </div>
//                     <Button onClick={onClose} >Close</Button>
//             </div>              
//         </div>
//     );
// }
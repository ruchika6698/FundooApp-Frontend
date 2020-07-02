import React from 'react';
import addCollaborator from "../Assets/addCollaborator.svg";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class Collaborator extends React.Component {
  state = {
    open: false,
     userName:''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  userHandler = eve =>{
            services.SearchUser({
                'searchWord' : eve.target.value
            })
            .then(responce =>{
                if(responce.statusText === 'OK'){
                    console.log("getting list sucessfully",responce);
                }
            })
            .catch(error=>{
                console.log(error)
            })
    }

  render() {
    return (
      <div>
         <img src={addCollaborator} label="Collaborator" alt="Add Person icon"  onClick={this.handleClickOpen}/>
        <Dialog
          className="collaborationdialog"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className="collaboratorTitle">Collaborators</DialogTitle>
          <Divider variant="middle" />
          <DialogContent>
            <DialogContentText className="dialogtext">
              <div className='ownerProfile'>
                    <div className="OwerProfileImage"> 
                        <AccountCircleIcon fontSize='large'/>
                    </div>
                    <div className="nameAndMail">
                        <div>
                            {localStorage.getItem('FirstName')+' '+localStorage.getItem('LastName')+"   "+"(Owner)"}
                        </div>
                        <div>
                        {localStorage.Email}
                        </div>
                    </div>
                </div>
            </DialogContentText>
             <div className="dialogSearch">
            <div className="dialogimage">
              <img src={addCollaborator} label="Collaborator" />
            </div>
            <div className="dialogtextfield">
              <TextField
                placeholder="Person or Email to Share with"
                id="standard-full-width"
                fullWidth
                margin="normal"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </div>
          </div>
          </DialogContent>
          <DialogActions className="dialogbutton" >
            <Button onClick={this.handleClose} >
              Cancel
            </Button>
            <Button onClick={this.handleClose}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
} 
export default Collaborator;
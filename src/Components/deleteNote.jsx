import React from "react";
import { Tooltip } from "@material-ui/core";
import NotesService from "../Services/notesServices";
let services = new NotesService();


class DeleteNote extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            noteIdList:[],
        }
        let token = localStorage.getItem("Token");
    }

    state = {
        anchorEl: null
    };

    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose1 = () => {
        this.setState({
            opensnackbar: false
        });
    };


    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    handleDeleteNotes = () => {
        let token = localStorage.getItem("Token");
        this.props.onSelectTrash(true);
        let requestData = {
        noteIdList: [this.card.id],
        isDeleted: true,
        };
        console.log("request data",requestData);
        services.DeleteNotes(token,requestData).then((json) => {  
        console.log("responce data==>",json);
        if(json.data.status==='Success'){  
        alert('Record deleted successfully!!');  
    }  
    })  
    };


    render() {

        return (
            <div >
                <Tooltip title="Delete Notes">
                    <div onClick={this.handleDeleteNotes} >Delete Note</div>
                </Tooltip>

            </div>
        );
    }
}

export default DeleteNote;
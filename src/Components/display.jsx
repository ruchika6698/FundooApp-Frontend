import React, { Component } from "react";
import "../CSS/dashboard.css";
import Icons from "./icons";
import Card from "@material-ui/core/Card";
import Dialog from '@material-ui/core/Dialog';
import UpdateNotes from "./updateNotes"
import NotesService from "../Services/notesServices";
let services = new NotesService();


export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImg: false,
      imagetrue: true,
      title: "",
      description: "",
      open:false,
      close:false,
      Data:{}
    };
  }
  openUpdate=()=>{
    this.setState({
        open:true
    });
  }
  handleClose=()=>{
    this.setState({
      open:false
    })
  }
  updatenote=(data)=>{
    this.setState({
      Data:data,
    open:true
    })
  }

  handleClickOpen = (event) => {
      this.setState({ open: true });
  };
  handleClickClose = (event) => {
      this.setState({ open: true });
  };
  
  render() {
    let Getnotes = this.props.Notes;
    const notes = Getnotes.filter(item=>item.isDeleted===false).map((data, index) => {
          return(
          // <div className="displaydiv">
          <Card key={data.id} className="card">
           <div className="title" onClick={()=>this.updatenote(data)}>
                {data.title}
            </div>
                <div className="getdescription" onClick={()=>this.updatenote(data)}>
                    {data.description}
                </div>
                <div className="geticon">
                  <Icons noteObject={data} UpdateNote={this.props.showNotes}/>
                </div>
          </Card>
          // </div>
          )
        })
    return (
      <div>
      <div className="display">
        {notes}
      </div>
      <div>
        <UpdateNotes Open={this.state.open} Data={this.state.Data} close={this.handleClose} UpdateNote={this.props.showNotes}/>
      </div>
      </div>
    );
  }
}
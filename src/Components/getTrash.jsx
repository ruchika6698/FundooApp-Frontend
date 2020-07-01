import React, { Component } from "react";
import Display from "./display";
import CreateNote from './createNote';
import UpdateNotes from "./updateNotes";
import Icons from "./icons";
import Card from "@material-ui/core/Card";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class GetTrashNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TrashNote: [],
      title: "",
      description: "",
    };
    this.showTrashNotes = this.showTrashNotes.bind(this);
  }

  showTrashNotes = () => {
    let token = localStorage.getItem("Token");
    services
      .getTrashNotes(token)
      .then((data) => {
        this.setState({ TrashNote: data.data.data.data.reverse() });
        console.log("trash notes",this.state.TrashNote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.showTrashNotes();
  }

  render() {
    const trashnotes = this.state.TrashNote.map((data, index) => {
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
                  
                </div>
          </Card>
          // </div>
          )
        })
    return (
      <div className="display">
        {trashnotes}
      </div>
    );
  }
}

export default GetTrashNotes;

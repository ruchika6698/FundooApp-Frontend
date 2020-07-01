import React, { Component } from "react";
import Display from "./display";
import CreateNote from './createNote';
import UpdateNotes from "./updateNotes";
import Icons from "./icons";
import Card from "@material-ui/core/Card";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class GetArchieved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ArchiveNote: [],
      title: "",
      description: "",
    };
    this.showArchiveNotes = this.showArchiveNotes.bind(this);
  }

  showArchiveNotes = () => {
    let token = localStorage.getItem("Token");
    services
      .getArchieveNotes(token)
      .then((data) => {
        this.setState({ ArchiveNote: data.data.data.data.reverse() });
        console.log("get Archive notes",this.state.ArchiveNote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.showArchiveNotes();
  }

  render() {
    const Archivenotes = this.state.ArchiveNote.map((data, index) => {
          return(
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
          )
        })
    return (
      <div className="display">
        {Archivenotes}
      </div>
    );
  }
}

export default GetArchieved;

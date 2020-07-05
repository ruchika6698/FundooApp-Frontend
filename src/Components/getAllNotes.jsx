import React, { Component } from "react";
import Display from "./display";
import CreateNote from './createNote';
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class GetAllNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AllNote: [],
      title: "",
      description: "",
    };
    this.showAllNotes = this.showAllNotes.bind(this);
  }

  showAllNotes = () => {
    let token = localStorage.getItem("Token");
    services
      .getAllNotes(token)
      .then((data) => {
        this.setState({ AllNote: data.data.data.data.reverse() });
        console.log("get note",this.state.AllNote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.showAllNotes();
  }

  render() {
    return (
      <div className="notesbox">
      <div className="createNote">
        <CreateNote showNotes={this.showAllNotes}/>
      </div>
      <div>
        <Display Notes={this.state.AllNote} showNotes={this.showAllNotes}/>
      </div>
      </div>
    );
  }
}

export default GetAllNotes;

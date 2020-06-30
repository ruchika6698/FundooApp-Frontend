import React, { Component } from "react";
import Display from "./display";
import CreateNote from './createNote';
import UpdateNotes from "./updateNotes";
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
        <CreateNote showNotes={this.showAllNotes}/>
        <Display Notes={this.state.AllNote} showNotes={this.showAllNotes}/>
      </div>
    );
  }
}

export default GetAllNotes;

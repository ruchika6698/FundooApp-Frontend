import React, { Component } from "react";
import Display from "./display";
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
    console.log("notes", this.state);
    let token = localStorage.getItem("Token");
    services
      .getAllNotes(token)
      .then((data) => {
        console.log(" All data found ", data.data.data.data);
        this.setState({ AllNote: data.data.data.data.reverse() });
        console.log("Notes Array", this.state.AllNote);
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
      <div>
        <Display Notes={this.state.AllNote} />
      </div>
    );
  }
}

export default GetAllNotes;

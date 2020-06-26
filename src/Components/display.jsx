import React, { Component } from "react";
import "../CSS/dashboard.css";
import Icons from "./icons";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
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
    };
  }

  render() {
    let Getnotes = this.props.Notes;
    console.log("get notes", Getnotes);
    const notes = Getnotes.map((d, index) => {
          return(
          <div key={index} className="card">
          {/* <Paper > */}
          <div className="getnotes">
           <div>
                {d.title}
            </div>
                <div>
                    {d.description}
                </div>
            </div>
                <div >
                  <Icons />
                </div>
        {/* </Paper> */}
          </div>
          )
        })
    return (
      <div>
        {notes}
      </div>
    );
  }
}

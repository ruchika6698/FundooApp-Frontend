import React, { Component } from "react";
import "../CSS/dashboard.css";
import Icons from "./icons";
import Card from "@material-ui/core/Card";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImg: false,
      imagetrue: true,
      title: "",
      description: ""
    };
  }


  render() {
    let Getnotes = this.props.Notes;
    console.log("get notes", Getnotes);
    const notes = Getnotes.map((d, index) => {
          return(
          <div key={index} className="display">
          <Card className="card">
           <div>
                {d.title}
            </div>
                <div>
                    {d.description}
                </div>
                <div className="geticon">
                  <Icons noteObject={d}/>
                </div>
          </Card>
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
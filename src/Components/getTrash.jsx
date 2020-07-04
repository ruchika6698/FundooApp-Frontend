import React, { Component } from "react";
import "../CSS/dashboard.css";
import Card from "@material-ui/core/Card";
import Masonry from 'react-masonry-css'
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class GetTrashNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TrashNote: [],
      title: "",
      description: "",
       breakpointColumnsObj : {
         default:4,
        1717: 4,
        1432: 3,
        1084: 2,
        750: 1
        },
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
         <Card key={data.id} className="archivecard" value={data} style={{
												backgroundColor: `${data.color}`,
											}}>
           <div className="archivetitle">
                {data.title}
            </div>
                <div className="archivegetdescription" >
                    {data.description}
                </div>
                <div className="geticon">
                  
                </div>
          </Card>
          // </div>
          )
        })
    return (
      <div className="archivedisplay">
      <Masonry
                breakpointCols={this.state.breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
      >
        {trashnotes}
      </Masonry>
      </div>
    );
  }
}

export default GetTrashNotes;

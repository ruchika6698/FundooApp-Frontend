import React, { Component } from "react";
import "../CSS/dashboard.css";
import Config from "../Configuration/config";
import Card from "@material-ui/core/Card";
import Masonry from "react-masonry-css";
import Icons from "./icons";
import { Checkbox } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import NotesService from "../Services/notesServices";
let services = new NotesService();

export class GetArchieved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ArchiveNote: [],
      title: "",
      description: "",
      breakpointColumnsObj: {
        default: 4,
        1717: 4,
        1432: 3,
        1084: 2,
        750: 1,
      },
    };
    this.showArchiveNotes = this.showArchiveNotes.bind(this);
  }

  showArchiveNotes = () => {
    let token = localStorage.getItem("Token");
    services
      .getArchieveNotes(token)
      .then((data) => {
        this.setState({ ArchiveNote: data.data.data.data.reverse() });
        console.log("get Archive notes", this.state.ArchiveNote);
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
      return (
        <Card
          key={data.id}
          className="archivecard"
          value={data}
          style={{
            backgroundColor: `${data.color}`,
          }}
        >
          <div className="displayimage">
            <img
              src={`${Config.imgUrl}${data.imageUrl}`}
              width="315px"
              height="315px"
            />
          </div>
          <div className="archivetitle">{data.title}</div>
          <div className="archivegetdescription">{data.description}</div>
          <div>
            {Boolean(data.noteCheckLists)
              ? data.noteCheckLists
                  .filter((checklist) => checklist.status === "open")
                  .map((checklist, index) => {
                    return (
                      <div className="checklistFileds">
                        <div key={checklist.id}>
                          <Checkbox
                            fontSize="small"
                            size="small"
                            checked={
                              checklist.status !== "open" ? "checked" : null
                            }
                            style={{ color: "black" }}
                          />
                        </div>
                        <div>{checklist.itemName}</div>
                      </div>
                    );
                  })
              : undefined}
            <Divider />
            {Boolean(data.noteCheckLists)
              ? data.noteCheckLists
                  .filter((checklist) => checklist.status === "close")
                  .map((checklist, index) => {
                    return (
                      <div className="checklistFileds">
                        <div key={checklist.id}>
                          <Checkbox
                            fontSize="small"
                            size="small"
                            checked={
                              checklist.status !== "open" ? "checked" : null
                            }
                            style={{ color: "black" }}
                          />
                        </div>
                        <div>{checklist.itemName}</div>
                      </div>
                    );
                  })
              : undefined}
          </div>

          <div className="collaborator">
            {Boolean(data.collaborators)
              ? data.collaborators.map((colabData, index) => {
                  return (
                    <div>
                      <IconButton>
                        <PersonAddOutlinedIcon collabaraterData={colabData} />
                      </IconButton>
                    </div>
                  );
                })
              : undefined}
          </div>
          <div className="geticon">
            <Icons noteObject={data} />
          </div>
        </Card>
      );
    });
    return (
      <div className="archivedisplay">
        <Masonry
          breakpointCols={this.state.breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {Archivenotes}
        </Masonry>
      </div>
    );
  }
}

export default GetArchieved;

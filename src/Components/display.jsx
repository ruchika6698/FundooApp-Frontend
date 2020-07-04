import React, { Component } from "react";
import "../CSS/dashboard.css";
import Icons from "./icons";
import Card from "@material-ui/core/Card";
import UpdateNotes from "./updateNotes"
import Collaborator from "./collaborator"
import Masonry from 'react-masonry-css'

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
     breakpointColumnsObj : {
         default:4,
        1717: 4,
        1432: 3,
        1084: 2,
        750: 1
        },
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
    const notes = Getnotes.filter(item=>item.isDeleted===false).filter((item) =>item.isArchived===false).map((data, index) => {
          return(
          <Card key={data.id} className="card" value={data} style={{
												backgroundColor: `${data.color}`,
											}}>
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
          )
        })
    return (
      <div>
      <div className="display">
      <Masonry
                breakpointCols={this.state.breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
        {notes}
        </Masonry>
      </div>
      <div>
        <UpdateNotes Open={this.state.open} Data={this.state.Data} close={this.handleClose} UpdateNote={this.props.showNotes}/>
      </div>
      </div>
    );
  }
}
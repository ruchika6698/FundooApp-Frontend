import React, { Component } from "react";
import "../CSS/dashboard.css";
import Config from "../Configuration/config"
import Icons from "./icons";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import {Avatar} from "@material-ui/core";
import {Checkbox} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import UpdateNotes from "./updateNotes"
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
      if (String(data.imageUrl).includes("client")) { data.imageUrl = data.imageUrl.replace("client", "");                 }
          return(
          <Card key={data.id} className="card" value={data} style={{
												backgroundColor: `${data.color}`,
											}}>
            <div className="displayimage"><img src={`${Config.imgUrl}${data.imageUrl}`} width="315px" height="315px" className="displayimage"/></div>
           <div className="title" onClick={()=>this.updatenote(data)}>
                {data.title}
            </div>
                <div className="getdescription" onClick={()=>this.updatenote(data)}>
                    {data.description}
                </div>

                <div >
                { (Boolean(data.noteCheckLists)) ? 
                    data.noteCheckLists.filter((checklist)=> checklist.status === 'open')
                                                          .map((checklist,index)=>{  
                      return(          
                        <div className='checklistFileds' onClick={()=>this.updatenote(data)}>      
                          <div key={checklist.id}>
                            <Checkbox fontSize='small' size='small'  checked={(checklist.status !== 'open') ? 'checked': null} style={{color : 'black'}}/>
                          </div>
                          <div>
                            { checklist.itemName}
                          </div> 
                        </div> 
                      );
                    })                  
                  : undefined                                  
                }
                { (Boolean(data.noteCheckLists)) ? 
                    data.noteCheckLists.filter((checklist)=> checklist.status === 'close')
                                                          .map((checklist,index)=>{  
                      return(    
                        <div>     
                        <Divider/> 
                        <div className='checklistFileds' onClick={()=>this.updatenote(data)}>      
                          <div key={checklist.id}>
                            <Checkbox fontSize='small' size='small'  checked={(checklist.status !== 'open') ? 'checked': null} style={{color : 'black'}}/>
                          </div>
                          <div>
                            { checklist.itemName}
                          </div> 
                        </div> 
                      </div>
                      );
                    })                  
                  : undefined                                  
                }
              </div>

                <div className="collaborator">
                {
                  (Boolean(data.collaborators))?
                    data.collaborators.map((colabData,index)=>{
                    return(
                      <div className="getCollaborator">
                      <Tooltip title={colabData.email} placement="bottom">
                        <Avatar
                          alt={colabData.firstName}
                          src="/"
                        ></Avatar>
                      </Tooltip>
                      {/* <IconButton >
                        <PersonAddOutlinedIcon  collabaraterData = {colabData}/>
                       </IconButton > */}
                      </div>
                    )})
                  :undefined
                }
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
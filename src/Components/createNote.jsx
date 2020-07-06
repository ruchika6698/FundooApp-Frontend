import React from "react";
import Container from "@material-ui/core/Container";
import TakeNote from "./takenote";
import Notestitle from "./notesTitle";
import Collaborator from "./collaborator"
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickAway: false,
      collaboratorOpen:false,
      title: "",
      description: "",
      pin: false,
      notes: null,
      collaboratorData:'',
    };
  }

  collaboratorOpen=()=>{
    this.setState({
      collaboratorOpen: true,
    });
  }
  addcollaborator=(data)=>{
     this.setState({
      collaboratorOpen: (!this.state.collaboratorOpen),
      collaboratorData:data
    });
    console.log("collab",this.state);
  }

  handleClick = () => {
    this.setState({
      clickAway: true,
    });
  };

  onHandleClickaway = () => {
    this.setState({
      clickAway: false,
    });
    if (this.state.title !== "" || this.state.description !== "") {
      this.setState({
        title: "",
        description: "",
        pin: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <ClickAwayListener onClickAway={this.onHandleClickaway}>
          <div>
            {this.state.clickAway ? ( this.state.collaboratorOpen ? <Collaborator addcollaborator={this.addcollaborator}/>
              :<Notestitle
                UpdateNote={this.props.showNotes}
                collaboratorData={this.state.collaboratorData}
                title={this.state.title}
                description={this.state.description}
                pin={this.state.pin}
                onHandleClickaway={this.onHandleClickaway}
                onCollaborator={this.collaboratorOpen}
              />
            ) : (
              <TakeNote handleClick={this.handleClick} />
            )} 
          </div>
        </ClickAwayListener>
      </Container>
    );
  }
}
export default CreateNote;
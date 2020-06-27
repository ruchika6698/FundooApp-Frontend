import React from "react";
import Container from "@material-ui/core/Container";
import TakeNote from "./takenote";
import Notestitle from "./notesTitle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickAway: false,
      title: "",
      description: "",
      pin: false,
      notes: null,
    };
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
            {this.state.clickAway ? (
              <Notestitle
                title={this.state.title}
                description={this.state.description}
                pin={this.state.pin}
                onHandleClickaway={this.onHandleClickaway}
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
export default Note;

import React from "react";
import Popover from "@material-ui/core/Popover";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";

export class AddLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      allLable: [],
    };
  }

  handleChangeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      clickAway: true,
    });
  };

  sentToBackEnd = () => {};

  onHandleClickaway = () => {
    this.setState({
      clickAway: false,
    });
    console.log("click away");
    if (this.state.title !== "" || this.state.description !== "") {
      this.sentToBackEnd();
      this.setState({
        title: "",
        description: "",
        pin: false,
      });
    }
  };

  showAllLabels = () => {};

  componentDidMount() {

    this.showAllLabels();
  }

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <div
          aria-owns={open ? "simple-popper" : undefined}
          onClick={this.handleClick}
          style={{ paddingRight: "12px" }}
        >
          Add label
        </div>
        <Popover
          style={{ left: "165.492px", top: "10px" }}
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ padding: "4.5%" }}>
            <div>Label note</div>
            <div>
              <FormControl>
                <Input
                  placeholder="Enter label name"
                  onChange={this.HandlelablevalueChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            {/* {this.state.allLable !== "" ? (
              <div>
                {this.state.allLable.map((label) => (
                  <div>
                    <Checkbox onClick={() => this.handleAdd(label.id)} />

                    {label.lable_title}
                  </div>
                ))}
              </div>
            ) : null} */}
            {/* <Divider />
            {this.state.value !== "" ? (
              <div>
                <IconButton onClick={this.HandleLabelAddChange}>
                  <AddRoundedIcon />
                </IconButton>
                Create
                <b
                  fullWidth
                  margin="normal"
                  InputProps={{
                    disableUnderline: true,
                  }}
                >
                  {this.state.value}
                </b>
              </div>
            ) : null} */}
          </div>
        </Popover>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.opensnackbar}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">New label Created</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose1}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose1}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
export default AddLabel;

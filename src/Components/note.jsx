import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MiniNote from "./miniNote";
import WholeNote from './wholeNote';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import NoteCard from './noteCard';

export class Note extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clickAway: false,
            title: '',
            description: '',
            pin: false,
            notes: null
        }
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            clickAway: true
        })
    }

    createNoteToBackEnd = () => {
        let note = {};
        console.log("sent");

        note.title = this.state.title;
        note.description = this.state.description;
        let token = localStorage.getItem("Token");
        console.log("Note Outside");

        console.log(note, token);

        console.log("Notesssssss");
    }

    onHandleClickaway = () => {
        this.setState({
            clickAway: false

        });

        console.log('click away');
        if (this.state.title !== '' || this.state.description !== '') {
            this.createNoteToBackEnd()
            this.setState({
                title: '',
                description: '',
                pin: false,
            })
        }

    }

    render() {

        return (
            <Container>
                <ClickAwayListener onClickAway={this.onHandleClickaway}>
                    <div>
                        {
                            this.state.clickAway ?
                                <WholeNote
                                    title={this.state.title}
                                    description={this.state.description}
                                    pin={this.state.pin}
                                    handleChangeText={this.handleChangeText}
                                    onHandleClickaway={this.onHandleClickaway}
                                /> :
                                < MiniNote handleClick={this.handleClick} />
                        }
                    </div>
                </ClickAwayListener>
                <div
                    className="noteCard" >
                    {
                        this.state.notes !== null &&
                        (this.state.notes).map((items) => (
                            <NoteCard items={items} />
                        ))
                    }
                </div>
            </Container >
        );
    }
}
export default Note;
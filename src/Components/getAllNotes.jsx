import React, { Component } from 'react';
import { getAllNotes } from '../Service/Service';
import WholeNote from './wholeNote';
import Note from './note';

class GetAllNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allNote: [],
            title: "",
            description: "",

        };
    }

    showAllNotes = () => {
        
    }
    componentDidMount=()=> {
        this.showAllNotes
    }
    

    render() {
        return (
            <div>
                <Note refresh={this.showAllNotes} />
            </div >
        );
    }
}

export default GetAllNotes;
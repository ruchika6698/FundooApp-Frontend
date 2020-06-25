import React from 'react';
import "../CSS/dashboard.css";
import NoteDialog from './noteDialog'

const NoteCard = (props) => {

    return (
        <div className="NoteCard" >
            <NoteDialog id={props.items.id}
                title={props.items.title}
                description={props.items.description} />
        </div>
    );
};

export default NoteCard;
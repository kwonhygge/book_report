import React from "react";
import MarkdownIt from 'markdown-it'
import "./NoteDetails.css"

function NoteDetails(props){
    const {location}=props;
    return(<div id="detail-container">
        <h1>{location.state.note.title}</h1>
        <div dangerouslySetInnerHTML={ {__html: location.state.note.content}}></div>
    </div>
    )
}

export default NoteDetails;
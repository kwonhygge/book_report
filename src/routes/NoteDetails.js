import React from "react";
import MarkdownIt from 'markdown-it'

function NoteDetails(props){
    const {location}=props;
    const mdParser = new MarkdownIt();

    return(<div>
        <div>{location.state.note.title}</div>
        <div>{mdParser.render("## <h1>Hello</h1>")}</div>
    </div>
    )
}

export default NoteDetails;
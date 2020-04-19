import React from "react";
import {NoteWrapper, NoteList} from "../../components";

function NoteContainer(props){
        return (
            <NoteWrapper>
                <NoteList state={props.state}/>
            </NoteWrapper>
        )
}

export default NoteContainer;
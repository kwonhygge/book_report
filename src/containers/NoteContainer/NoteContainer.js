import React, {Component} from "react";
import {NoteWrapper, NoteList} from "../../components";

class NoteContainer extends Component{
    render(){
        return (
            <NoteWrapper>
                <NoteList />
            </NoteWrapper>
        )
    }
}

export default NoteContainer;
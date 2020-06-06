import React, {Component} from "react";
import {NoteWrapper, NoteList} from "../../components";
import * as service from "../../services/book";

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
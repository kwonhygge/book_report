import React, {Component} from "react";
import {NoteWrapper, NoteList} from "../../components";

class NoteContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <NoteWrapper>
                <NoteList />
            </NoteWrapper>
        )
    }
}

export default NoteContainer;
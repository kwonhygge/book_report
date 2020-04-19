import React from "react";
import {Header,NoteList, Note} from "../components";
import {NoteContainer} from "../containers";
import propTypes from "prop-types";

function App(props){
    const state = props.history.location.state;
    return(  
        <div>
            <Header />
            <NoteContainer state={state} />
        </div>
    )
}

export default App;
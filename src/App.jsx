import React from "react";
import {Header} from "./components";
import {NoteContainer} from "./containers";
import propTypes from "prop-types";

function App(){
    return(
        <div>
            <Header />
            <NoteContainer />
        </div>
    )
}

export default App;
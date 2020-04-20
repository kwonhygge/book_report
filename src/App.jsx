import React from "react";
import {HashRouter,Route} from "react-router-dom";
import {NoteDetails,Home} from "./routes";


function App(){
    return <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:id" component={NoteDetails}/>

    </HashRouter>
}

export default App;
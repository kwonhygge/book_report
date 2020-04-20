import React from "react";
import {HashRouter,Route} from "react-router-dom";
import {Create,Home} from "./routes";


function App(){
    return <HashRouter>
        <Route path="/" exact={true} component={Home} />
    </HashRouter>
}

export default App;
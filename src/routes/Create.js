import React from "react";
import {Header,NoteMake} from "../components";

function Create(props){
    console.log(props)
    return(<div>
    <Header />
    <NoteMake props={props}/>
    </div>)
}

export default Create;
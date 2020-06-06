import React from "react";
import "./NoteWrapper.css";

function NoteWrapper({children}){
    console.log({children});
    return(
        <div className="noteWrapper">
            {children}
        </div>
    )
};

export default NoteWrapper;
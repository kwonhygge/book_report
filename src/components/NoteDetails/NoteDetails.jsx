import React from "react";

function NoteDetails({ title }){
    return(
       <div>
            <h1>{title}</h1>
            <h2>{localStorage.getItem({title})}</h2>
       </div>
    )
}

export default NoteDetails;
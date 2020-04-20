import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./NoteList.css";
import {NoteMake,Note} from "../../components";

function NoteList(){
    const [notes, setNotes] = useState([]);
    const [editMode,setEditMode] = useState(false);

    function toggleEditMode(){
        setEditMode(!editMode);
    }

    function addNote(newNote){
        setEditMode(!editMode);
        setNotes(prevnotes => {
          return [...prevnotes,newNote];
        })
      }
    
    return(<div>{
        editMode&&
        <NoteMake onAdd={addNote}/>
    }{
        !editMode&&
        <div id="whole-list-container">
                    <div className="roof"></div>
                    <div className="list-container">
                        <ul>
                            {notes.map((eachNote,index)=>(
                                <Link to={{
                                    pathname:`/${index}`,
                                    state:{
                                        note:eachNote
                                    }
                                }} style={{textDecoration:"none"}}><Note key={index} id={index} title={eachNote.title} /></Link>
                            ))}
                        </ul>
                    </div>
                    <button className="add-btn" onClick={(e) => toggleEditMode()}>Add</button>
                </div>
    }
    
    </div>
            
        
    );
    
    
}

export default NoteList;
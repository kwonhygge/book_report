import React,{useState} from "react";
import "./NoteList.css";
import {NoteMake,Note} from "../../components";

function NoteList(){
    const [notes, setNotes] = useState([]);
    const [editMode,setEditMode] = useState(false);

    console.log(notes);
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
                              <Note key={index} id={index} title={eachNote.title}/>
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
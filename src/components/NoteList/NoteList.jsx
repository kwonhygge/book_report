import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";

function NoteList(){
    const [notes, setNotes] = useState([]);

    return(
            <div id="whole-list-container">
                    <div className="roof"></div>
                    <div className="list-container">
                        <ul>
                            <li><h2>작은아씨들</h2></li>
                            <li><h2>작은아씨들</h2></li>
                            <li><h2>작은아씨들</h2></li>
                            <li><h2>작은아씨들</h2></li>
                            <li><h2>작은아씨들</h2></li>
                            <li><h2>작은아씨들</h2></li>
                        </ul>
                    </div>
                        <Link to={{
                            pathname:"/create"
                        }}><button className="add-btn">Add</button></Link>
                </div>
        
    );
}

export default NoteList;
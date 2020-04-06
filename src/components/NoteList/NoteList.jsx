import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Note from "../Note/Note";
import "./NoteList.css";

function NoteList(){

    return(
            <div id="whole-list-container">
                    <div class="roof"></div>
                    <div class="list-container">
                        <ul>
                            <li><h2>작은아씨들</h2></li>
                        </ul>
                    </div>
                        <button class="add-btn">Add</button>
                </div>
        
    );
}

export default NoteList;
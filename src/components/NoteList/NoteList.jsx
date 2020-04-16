import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Note from "../Note/Note";
import "./NoteList.css";

function NoteList(){

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
                        <button className="add-btn">Add</button>
                </div>
        
    );
}

export default NoteList;
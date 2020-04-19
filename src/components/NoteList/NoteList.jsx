import React from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";

class NoteList extends React.Component{
    constructor(props){
        super(props); 
        console.log(props);
        this.addNote = this.addNote.bind(this);
    }
    _isMounted = false;
    state={
        notes:[]
    }
    componentDidMount() {
        console.log("Helloyo");
        this._isMounted = true;
      }

    addNote(newNote){
        console.log("Hello");
        console.log(newNote);
        console.log(this._isMounted);
            if(this._isMounted){
                console.log("inside")
                this.setState(prevnotes => {
                    return [...prevnotes,newNote];
                  })
            }
      }

      componentWillUnmount() {
            this._isMounted = false;
            
      }

    render(){
        console.log("render");
        console.log(this.state.notes)
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
                            pathname:"/create",
                            state:{
                                onAdd:this.addNote
                            }
                        }}><button className="add-btn">Add</button></Link>
                </div>
        
    );
    }
    
}

export default NoteList;
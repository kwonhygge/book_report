import React from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";

class NoteList extends React.Component{
    constructor(props){
        super(props);
        this.addNote = this.addNote.bind(this);
    }
    propState=this.props.state;
    state={
        notes:[{note:{
            title:"Hello",
            content:"Hello"
        }}]
    }
    componentDidMount() {
        console.log("did")
        console.log(this.propState)
        if(this.propState!==undefined){
            this.addNote(this.propState);
        }
      }

    addNote(newNote){
        console.log("inside")
        console.log(newNote);
        if(!this.notes){
            this.setState(prevnotes => ({
                notes:[prevnotes.notes,newNote]
            }))
        }else{
            this.setState({notes:[newNote]});
        }
        
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
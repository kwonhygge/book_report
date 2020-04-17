import React, {useState} from "react";
import "./NoteMake.css";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import {Link} from "react-router-dom";
import 'react-markdown-editor-lite/lib/index.css';

function NoteMake(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    });

    const mdParser = new MarkdownIt();

    function submitNote(event){
        localStorage.setItem(note.title,note.content);
      }

    function handleInputChange(event){
        const {name,value} = event.target;
    
        setNote((prevValue)=>{
          return{
            ...prevValue,
            [name]:value
          };
        });
    
      }

    function handleEditorChange({html}) { 
        setNote((prevValue)=>{
            return{
                ...prevValue,
                ["content"]:html
            }
        })
      }

    return (
        <div>
        <form action="/">
            <input id="title" name="title" onChange={handleInputChange} placeholder="책 제목" required></input>
            <MdEditor
                value="# 느낀 점을 작성해주세요."
                renderHTML={(text) => mdParser.render(text)}
                style={{height:"400px"}}
                onChange={handleEditorChange}
            />
            <button className="save-btn" onClick={submitNote}>Save</button>
        
        </form>
        
        </div>
    )
}

export default NoteMake;
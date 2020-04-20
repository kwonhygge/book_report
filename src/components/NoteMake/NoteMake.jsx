import React from "react";
import "./NoteMake.css";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

class NoteMake extends React.Component{
  constructor(props){
    super(props);
    this.submitNote = this.submitNote.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state={
    note:{
      title:"",
      content:""
    }
  }
    mdParser = new MarkdownIt();

    submitNote(event){  
        const {note} = this.state;
        this.props.onAdd(note);
        event.preventDefault();
      }

    handleInputChange(event){
      const title = event.target.value;
        this.setState(prevValue=>({
          note:{title:title,content:prevValue.note.content}
        }))
        
      }

    handleEditorChange({html}) { 
      this.setState(prevValue=>({
        note:{title:prevValue.note.title,content:html}
      }))
      }

    render(){
      return (
        <div>
        <form >
            <input id="title" name="title" onChange={this.handleInputChange} placeholder="책 제목" required></input>
            <MdEditor
                value="# 느낀 점을 작성해주세요."
                renderHTML={(text) => this.mdParser.render(text)}
                style={{height:"400px"}}
                onChange={this.handleEditorChange}
            />
            <button onClick={this.submitNote} className="save-btn">Save</button>
        
        </form>
        
        </div>
    )
    }
}

export default NoteMake;
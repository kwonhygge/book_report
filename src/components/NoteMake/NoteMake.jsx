import React from "react";
import "./NoteMake.css";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import {Link} from "react-router-dom";
import 'react-markdown-editor-lite/lib/index.css';

class NoteMake extends React.Component{
  constructor(props){
    super(props);
    this.submitNote = this.submitNote.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount(){

    const {location,history}=this.props.props;
    if(location.state===undefined){
      history.push("/");
    }
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
        const {history,location} = this.props.props;
        console.log(location);
        event.preventDefault();
        history.push({
          pathname:"/",
          state:{note:note}
        });
      }

    handleInputChange(event){
      const title = event.target.value;
      console.log(this.state.note)
        this.setState(prevValue=>({
          note:{title:title,content:prevValue.note.content}
        }))
        
      }

    handleEditorChange({html}) { 
      console.log(this.state.note)
      this.setState(prevValue=>({
        note:{title:prevValue.note.title,content:html}
      }))
      }

    render(){
      return (
        <div>
        <form onSubmit={this.submitNote}>
            <input id="title" name="title" onChange={this.handleInputChange} placeholder="책 제목" required></input>
            <MdEditor
                value="# 느낀 점을 작성해주세요."
                renderHTML={(text) => this.mdParser.render(text)}
                style={{height:"400px"}}
                onChange={this.handleEditorChange}
            />
            <button type="submit" className="save-btn">Save</button>
        
        </form>
        
        </div>
    )
    }
}

export default NoteMake;
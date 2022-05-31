import React, { Component } from 'react';
import '../css/Todo.css';


class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            edit:false,
            text:this.props.text
        }
    }
    uptTodo=()=>{
        //alert('수정Todo')
        //alert('수정할 일'+this.state.text)
        //alert('수정할 번호'+this.props.id)

        this.setState({
            edit:!this.state.edit
        })

        if(this.state.edit===true){
            this.props.uptTodo(this.props.id, this.state.text)
        }
    }

    textChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value);
    }

    delTodo=()=>{
        //alert('삭제Todo')
        //alert('삭제할 번호'+this.props.id)
        this.props.delTodo(this.props.id)
    }
    

    render() {
        if(this.state.edit===false){
            return (
                <div id='todo'>
                    <span>
                        {this.props.id} .
                    </span>
                    <span>
                        📝 {this.props.text}
                    </span>
                    <button onClick={this.uptTodo}>수정</button>
                    <button id='del' onClick={this.delTodo}>삭제</button>
                </div>
            );
        }else if(this.state.edit===true){
            return (
                <div id='todo'>
                    <span>
                        {this.props.id}
                    </span>
                    <span>
                        <input 
                        type='text' defaultValue={this.props.text} onChange={this.textChange} name='text'>
                        </input>
                    </span>
                    <button onClick={this.uptTodo}>수정</button>
                    <button id='del' onClick={this.delTodo}>삭제</button>
                </div>
            );
        }
        
    }
}

export default Todo;
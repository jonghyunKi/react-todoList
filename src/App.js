import './App.css';
import Todo from './components/Todo.js';
import InPutComp from './components/InPutComp';

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      TodoList:[
        {id:1,text:'오늘도 행복하기 🥰'},
        
      ]
    }
  }

  addTodoList=(id,text)=>{
    //alert('app 추가')
    //alert('app에 넘어온 할일'+text)
    const newTodo={id:id,text:text}
    this.setState({
      TodoList:this.state.TodoList.concat(newTodo),
    })
  }

  uptTodo=(id,text)=>{
    //alert('app수정')
    //alert('app수정할일'+text)
    //alert('app수정할 번호'+id)

    const uptNewTodo={id:id,text:text}
    const uptNewTodoList=this.state.TodoList.map(
      (data)=>(data.id===id)?({...data,...uptNewTodo}):(data)
    )

    this.setState({
      TodoList:uptNewTodoList
    })
  }

  delTodo=(id)=>{
    //alert('삭제app')
    //alert('삭제할 번호(app)'+id)
    console.log(id)
    const filterTodoList=this.state.TodoList.filter(
      (data)=>(data.id!==id)
    )

    this.setState({
      TodoList:filterTodoList
    })
  }
  render() {
    const result=this.state.TodoList.map(
      (data,index)=>(<Todo key={index} id={data.id} text={data.text} uptTodo={this.uptTodo} delTodo={this.delTodo}/>)
    )
    return (
      <div id='app'>
        <div id='title'>TODOLIST</div>
        <InPutComp addTodoList={this.addTodoList}/>
        <div>
          {result}
        </div>
        
        
      </div>
    );
  }
}

export default App;


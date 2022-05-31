import React, { Component } from 'react';
import '../css/InPutComp.css'

class InPutComp extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
            text:'',
        }
    }
    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
        
    }

    addTodoList=()=>{
        //alert('InPut 추가!')
        //alert('입력된 할일'+this.state.text)
        this.props.addTodoList(this.state.id,this.state.text)
        
    }

    render() {
        return (
            <div id='inputComp'>
                <input type='text' placeholder="번호입력" onChange={this.inputChange} name="id"/>
                <input  type='text' placeholder='추가할 할 일을 입력하세요' onChange={this.inputChange} name='text'/>
                <button  id='inputButton' onClick={this.addTodoList}>추가</button>
            </div>
        );
    }
}

export default InPutComp;
import React from 'react'
import './../../AddItemString/AddItemString.css'
import { connect } from 'react-redux';

function TaskEditTextBox(props) {
    let taskTextBox;
    return (
        <span
            onBlur={()=>changeTaskText(props,taskTextBox.value)}
            onKeyPress={(e)=>{
                if((e.key==='Enter')&&(e.target.value!=="")) changeTaskText(props,taskTextBox.value);
            }}
        >
           <input className="textInput" type="text" defaultValue={props.oldText} ref={(input) => { taskTextBox=input; if(input) input.focus()}} />
        </span>
    )
}

function changeTaskText(props,newText) {
    props.show(false);
    props.changeText(props.index,newText);
}

export default connect(
    state=>({}),
    dispatch=>({
        changeText: function(ind,val) {return dispatch({type:'CHANGE_TASK_TEXT',index:ind, value: val})}
    })
)(TaskEditTextBox)
import React, { useState } from 'react'
import './ToDoItem.css'
import CheckBox from './CheckBox/CheckBox.js'
import DeleteButton from './DeleteButton/DeleteButton.js'
import TaskEditTextBox from './TaskEditTextBox/TaskEditTextBox.js'
import { connect } from 'react-redux';

function ToDoItem(props) {
    const [edit, showEdit] = useState(false);

    return (
        <div className='todoitem' onDoubleClick={()=>showEdit(true)}>         
            <CheckBox index={props.index}/>
            {edit ? (<TaskEditTextBox index={props.index} oldText={props.task.text} show={showEdit} />) : (
                <>
                    <span className={"textitem" + (props.task.completed ? " completed" : "")}>{props.task.text}</span>
                    <span className='dateitem'>{new Date(props.task.createdDate).toLocaleString()}</span>
                </>
            )}
            <DeleteButton index={props.index}/>               
        </div>
    );

}



function mapStateToProps(state,ownProps) {
    return {task: state.tasks[ownProps.index]}
}

export default connect(
    mapStateToProps
)(ToDoItem)
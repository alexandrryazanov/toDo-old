import React from 'react'
import './AddItemString.css'
import { connect } from 'react-redux';

function AddItemString(props) {
    return (
        <div className='additemstring'>
            <span className='icon'>+</span>
            <input 
                className='textInput' 
                type='text' 
                placeholder='New Task' 
                onKeyPress={(e)=>{
                    if((e.key==='Enter')&&(e.target.value!=="")) {props.addItem(e.target.value);e.target.value=""};
                }}
                onBlur={(e)=>{
                    if(e.target.value!=="") {props.addItem(e.target.value);e.target.value=""}
                }}
            />
        </div>
    );
}


function mapStateToProps(state,ownProps) {
    return {task: state.tasks[ownProps.index]}
}

export default connect(
    mapStateToProps,
    dispatch => ({
        addItem: (val)=>dispatch({type:'ADD_TASK',value:val})
    })
)(AddItemString)
import React from 'react'
import './DeleteButton.css'
import { connect } from 'react-redux';

function DeleteButton(props) {
    return (
        <span className="deletebutton" onClick={()=>props.delItem(props.index)}>
           ✖
        </span>
    )
}

export default connect(
    state=>({}),
    dispatch=>({
        delItem: (index)=>dispatch({type:'DELETE_TASK', value: index})
    })
)(DeleteButton)
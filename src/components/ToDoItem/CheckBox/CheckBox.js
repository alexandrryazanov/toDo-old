import React from 'react'
import './CheckBox.css'
import { connect } from 'react-redux';

function CheckBox(props) {
    return (
        <span className="checkbox" onClick={()=>props.chgCompleted(props.index)}>
            {props.checked && <span className="checked"/>}
        </span>
    )
}

export default connect(
    (state,ownProps)=>({
        checked: state.tasks[ownProps.index].completed
    }),
    dispatch=>({
        chgCompleted: (item)=>dispatch({type:'CHANGE_COMPLETED', value: item})
    })
)(CheckBox)
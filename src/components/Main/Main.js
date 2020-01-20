import React from 'react';
import './Main.css'
import ToDoItem from './../ToDoItem/ToDoItem.js'
import AddItemString from   './../AddItemString/AddItemString.js'
import FilterBar from   './../FilterBar/FilterBar.js'
import { connect } from 'react-redux';

function Main(props) {
    return (
        <div className='main'>
            <ul>
                {props.tasks.map((value,index) => showByFilter(props.filter,value,index))}
            </ul>
            <AddItemString/>
            <FilterBar/>
        </div>
    );
}

function showByFilter(filter,value,index) {
    if(filter===0) {
        return (<li key={index}><ToDoItem data={value} index={index} /></li>)
    } else if (filter===1) {
        if(value.completed===true) {
            return (<li key={index}><ToDoItem data={value} index={index} /></li>)
        }
    } else if (filter===2) {
        if(value.completed===false) {
            return (<li key={index}><ToDoItem data={value} index={index} /></li>)
        }
    }
}

export default connect(
    state => ({tasks: state.tasks, filter: state.filter})
)(Main)
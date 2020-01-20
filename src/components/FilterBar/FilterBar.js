import React from 'react'
import './FilterBar.css'
import { connect } from 'react-redux';

function FilterBar(props) {
    return (
        <div className='filterbar'>
            <div className='content'>
                <a className={(props.filter===0) ? 'selected' : ''} href="/#" onClick={()=>props.changeFilter(0)}>All</a>
                <a className={(props.filter===1) ? 'selected' : ''} href="/#" onClick={()=>props.changeFilter(1)}>Completed</a>
                <a className={(props.filter===2) ? 'selected' : ''} href="/#" onClick={()=>props.changeFilter(2)}>Uncompleted</a>
            </div>
        </div>
    );
}


export default connect(
    state => ({filter: state.filter}),
    dispatch => ({
        changeFilter: (val)=>dispatch({type:'FILTER',value:val})
    })
)(FilterBar)
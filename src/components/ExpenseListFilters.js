import React from 'react'
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux'
import { setTextFilter, sortByDate,sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props)=>(
    <div>
        
        <input type="text" defaultValue={props.filters.text} onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
            console.log(e.target.value);
        }}/>

        <select
        
        onChange={(e)=>{
            if(e.target.value==='date'){
                props.dispatch(sortByDate())
            }else if(e.target.value==='amount'){
                props.dispatch(sortByAmount())
            }
           
        }}
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        
    </div>
);

const mapStateToprops = (state)=>{
    return{
        filters : state.filters
    }
}

export default connect(mapStateToprops)(ExpenseListFilters)
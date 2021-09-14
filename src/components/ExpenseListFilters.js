import React from 'react'
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux'
import { setTextFilter, sortByDate,sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props)=>(
    <div className="content-container">
        <div className="input-group">
                <div className="input-group__item">
                        <input placeholder="Enter Search Text Filter" type="text" defaultValue={props.filters.text} onChange={(e)=>{
                            props.dispatch(setTextFilter(e.target.value))                            
                        }}/>
                </div>

                    <div className="input-group__item">
                                <select className="input-group__item"
                                
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
        
            </div>   
              
    </div>
);

const mapStateToprops = (state)=>{
    return{
        filters : state.filters
    }
}

export default connect(mapStateToprops)(ExpenseListFilters)
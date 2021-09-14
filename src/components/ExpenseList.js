import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'



const ExpenseList = (props) =>(
    <div>
        
            <h1>Expense List</h1>
            {props.text}
            <br/>
            {props.expenses.map((expense)=>{
                return(
                    <ExpenseListItem key={expense.id} {...expense}>
                        <p>props.note</p>
                    </ExpenseListItem>
                )
            })}
        
    </div>
);


const mapStateToprops = (state)=>{
    return{
        expenses : selectExpenses(state.expenses,state.filters)
    };
}
 
export default connect(mapStateToprops)(ExpenseList);
import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'



const ExpenseList = (props) =>(
    <div className="content-container">
        

        <div className="list-header">
       
            <div classsName="show-for-desktop"><b>Expense</b></div>        
            <div classsName="show-for-desktop"><b>Amount</b></div>
        </div>           
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
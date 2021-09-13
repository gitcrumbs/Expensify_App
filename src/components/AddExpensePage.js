import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux'
import { AddExpense } from '../actions/expenses';

const AddExpensePage = (props)=>(
    <div>
        This is from My Create Expense Page
        <ExpenseForm
            onSubmit={(expense)=>{              
                props.dispatch(AddExpense(expense))
                alert("Added Successfully for "+expense.description);
                props.history.push('/')
            }}
        />  
    </div>
)


export default connect()(AddExpensePage);

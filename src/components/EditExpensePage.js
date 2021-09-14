import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpensebyId,removeExpensebyId} from '../actions/expenses'


const EditExpensePage = (props)=>{   
    
    return(
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{                    
                    props.dispatch(editExpensebyId(props.expense.id,expense));
                    props.history.push('/')
                }}  
            />

            <button onClick={()=>{
                console.log("Button Click")
                props.dispatch(removeExpensebyId({id:props.expense.id}));
                props.history.push('/')
    
            }}>Remove</button>
        </div>
    );
   
};

const mapStatetoProps=(state,props)=>{
    return{

        expense : state.expenses.find((expense)=>expense.id===props.match.params.id)
    };
};

export default connect(mapStatetoProps)(EditExpensePage);
import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary=({expenseCount,expensesTotal})=>{

    const expenseWord = expenseCount===1 ? 'expense':'expenses'
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling to {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapstatetoProps = (state) =>{

    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expenseCount:visibleExpenses.length,
        expensesTotal : selectExpensesTotal(state.expenses)
    }
};

export default connect(mapstatetoProps)(ExpenseSummary);
import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { NavLink } from 'react-router-dom';

export const ExpenseSummary=({expenseCount,expensesTotal})=>{

    const expenseWord = expenseCount===1 ? 'expense':'expenses'
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return(
        <div className="page-header">

            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling to <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                <NavLink className="button" to="/create" activeClassName="is-active">Add Expense</NavLink>
                </div>
            </div>
            
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
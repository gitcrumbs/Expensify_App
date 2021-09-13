import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddExpense} from  './actions/expenses';
import {setTextFilter} from  './actions/filters';
import getVisibleExpenses from  './selectors/expenses';
import './styles/base.css'
import {Provider} from 'react-redux'
import moment from 'moment';




 const store = configureStore();
 var today  = moment().format('YYYY-MM-DD');;
console.log("Current Date is",today)
store.dispatch(AddExpense({description : 'Water Bill',amount:10000,createdAt:today,note:"Water Bill Test Note"}));
store.dispatch(AddExpense({description : 'Gas Bill',amount:5000,createdAt:"2021-09-08",note:"Gas Bill Test Note"}));
store.dispatch(AddExpense({description : 'Rent',amount:8888,createdAt:today,note:"Rent Test Note"}));


const state = store.getState();
const visible = getVisibleExpenses(state.expenses,state.filters);
console.log("Visible Expenses",visible);

// addExpense -> Water Bill
// addExpense -> Gas Bill
//setTextFilter - > bill
//getVisibleExpenses -> Print values visibles ones on the screen    


console.log(store.getState());

const jsx = (
    
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    
    );

ReactDOM.render(jsx,document.getElementById("app"))
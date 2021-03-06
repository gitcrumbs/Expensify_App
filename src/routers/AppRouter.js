import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpense from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


        const AppRouter = ()=>(
            <BrowserRouter>
            <div>
                <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpense} />                
                <Route path='/:id' component={EditExpensePage} />               
                <Route component={NotFound} />
            </Switch>   
            </div> 
         </BrowserRouter>
        );
 
export default AppRouter;
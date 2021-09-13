import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should Correctly add up no expenses',()=>{
   
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});


test('Should Correctly add up Single expenses',()=>{
    
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
    
 });

 

test('Should Correctly add up All expenses',()=>{
    
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
    
 });
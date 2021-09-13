import { exportAllDeclaration } from "@babel/types";
import { TestWatcher } from "@jest/core";
import { AddExpense,removeExpensebyId,editExpensebyId } from "../../actions/expenses";



test('should setup remove expense action object',()=>{
    const action = removeExpensebyId({id:'123abc'});
    
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'

    });
});


test('should setup Edit  expense action object',()=>{
    const action = editExpensebyId('123abc',{note:'New note Test value'});
    
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note: 'New note Test value'
        }

    });
});


test('should setup Add expense action object with the provided values',()=>{
    
    const expenseData = {
        description : 'Rent',
        amount : 20500,
        createdAt : 1000,
        note : 'This was the last months rent'
    };
    const action = AddExpense(expenseData);
    
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});



test('should setup Edit expense object with default values',()=>{    
   const action = AddExpense();
   expect(action).toEqual({
       type : 'ADD_EXPENSE',
       expense:{       
        id: expect.any(String),
        description: '',
        note:'',
        amount:0,
        createdAt:0
    }
   })

});



import { v4 as uuidv4 } from 'uuid';

 //Add Expense

 export const AddExpense = (
    {
        description= '',
        note='',
        amount=0,
        createdAt=0

    }={}
    ) =>({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        amount,
        note,
        createdAt
    }
});

export const removeExpensebyId = ({id}={})=>({

    type : 'REMOVE_EXPENSE',
    id

});


//EDIT_EXPENSE
export const editExpensebyId = (id,updates) =>({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

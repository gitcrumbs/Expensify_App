
import { createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';
const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
  };


  //Expenses Reducer

  const expensesreducerdefaultState = [];
  export const expensesReducer = (state= expensesreducerdefaultState,action) => {
     switch (action.type) {
          case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
           ];

           case 'REMOVE_EXPENSE':              
               return state.filter(({id})=>id!==action.id);

           case 'EDIT_EXPENSE' :
                return state.map((expense)=>{
                  if(expense.id===action.id){

                    return{
                      ...expense,
                      ...action.updates
                    }
                  }else{
                    return expense;
                  }
                })

          default:
            return state;
     
           

          }
  };



//Filters Reducers
//text=> '' , sortBy=> 'date' ,startDate => undefined ,endDate => undefined


const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    
    switch (action.type) 
    {      
      case 'SET_TEXT_FILTER':
        return{
          ...state,
          text : action.text 
        };

        case 'SORT_BY_AMOUNT':
          return {
            ...state,
            sortBy:'amount'
          }

          case 'SORT_BY_DATE':
          return {
            ...state,
            sortBy:'date'
          }
          case 'SET_START_DATE':
            return {
              
              ...state,
              startDate : action.startDate
            }
        
            case 'SET_END_DATE':
              return {
                ...state,
                endDate : action.endDate
              }  

       default : 
        return state;
    }
}

const store = createStore(
    combineReducers({
      expenses : expensesReducer,
      filters : filtersReducer
    })
  );
  

const getvisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
  
  return expenses.filter((expense)=>{
    
    const startDateMatch = typeof startDate!=='number' || expense.createdAt >=startDate;
    const endDateMatch = typeof endDate!=='number' || expense.createdAt <=endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());    
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1: -1;
    }

    if(sortBy === 'amount'){
      return a.amount < b.amount ? 1: -1;
    }
  });
};


const unsubcribe = store.subscribe(()=>{
  const state = store.getState();
 const visibleExpenses = getvisibleExpenses(state.expenses,state.filters);
 console.log("Visible Expenses",visibleExpenses);
})


  //Add Expense

const AddExpense = (
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

const removeExpensebyId = ({id}={})=>({

    type : 'REMOVE_EXPENSE',
    id

});


//EDIT_EXPENSE
const editExpensebyId = (id,updates) =>({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_TEXT_FILTER

const setTextFilter = (text = '')=>({
  type : 'SET_TEXT_FILTER',
  text
});


//SORT_BY_DATE
const sortByDate = () =>({
  type :'SORT_BY_DATE' 
});

//SORT_BY_AMOUNT

const sortByAmount = () =>({
  type :'SORT_BY_AMOUNT' 
});

const setStartDate = (datevalue) =>({
  type :'SET_START_DATE',
  startDate :datevalue
})

const setEndDate = (datevalue) =>({
  type :'SET_END_DATE',
  endDate :datevalue
})
 
 


const expenseOne = store.dispatch(AddExpense({ description: 'Rent',amount:800,createdAt:-1000}));



const expenseTwo =store.dispatch(AddExpense({ description: 'Coffee',amount:300,createdAt:1000}));

//store.dispatch(setStartDate(1000));

// store.dispatch(removeExpensebyId({id:expenseOne.expense.id}));

// store.dispatch(editExpensebyId(expenseTwo.expense.id,{amount:500}));

 //store.dispatch(setTextFilter('Rent'));

// store.dispatch(setTextFilter());


 store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate());






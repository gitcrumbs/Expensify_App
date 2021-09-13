import { createStore } from 'redux'

//Action generators

const add = ({a,b},c)=>{
    return ((a + b)*c) ;
}


console.log(add({a:1,b:12},200));

const incrementcount = (payload={})=>({
    type : 'INCREMENT',
    incrementBy: typeof payload.incrementBy ==='number'?payload.incrementBy : 1
});

const decrementcount = ()=>({
    type : 'DECREMENT',
    decrementBy : 5
})



const store = createStore((state={count: 0},action)=>{


    switch (action.type) {

        
        case 'INCREMENT':    
        
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return{
                count : state.count +incrementBy
            };
          
          case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return{
                count : state.count -decrementBy
            };

              case 'RESET':
              return{
                  count : 0
              }
            
        default:
            return state;
        
            
           
    }  
    
});

const unsubcribe = store.subscribe(()=>{
    console.log(store.getState())   
})

// Assume that from UI you want to increment the count


store.dispatch(incrementcount({incrementBy:8}))

store.dispatch(decrementcount())

store.dispatch(incrementcount())


const user = {
    name: 'Ashwani',
    age : 24
}


console.log({
   
    ...user,
    age:27,
    location : 'philadelphia'
});
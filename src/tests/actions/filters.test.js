import moment from 'moment'
import { setStartDate,setEndDate,setTextFilter, sortByDate,sortByAmount } from "../../actions/filters";


test('Should generate set Start date action object',()=>{
    const action  = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    });
});

test('Should generate set End date action object',()=>{
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate : moment(0)
    })
});

test('Should generate set text filter object with the test value',()=>{    
    const text = 'Something In';
    const action = setTextFilter(text);

    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text: 'Something In'                    
    });        
});


test('Should generate action object for Sort by Date',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});


test('Should generate action object for Sort by Amount',()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});
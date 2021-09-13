import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';
import { ExpenseSummary } from "../../components/ExpensesSummary";


configure({adapter: new Adapter()});
test('Should correctly render ExpensesSummary with 1 expense',()=>{
    const wrapper = shallow(
        <ExpenseSummary
            expenseCount={1} expensesTotal={235}
        />
    );
    expect(wrapper).toMatchSnapshot();
});


test('Should correctly render ExpensesSummary with multiple expense',()=>{
    const wrapper = shallow(
        <ExpenseSummary
            expenseCount={23} expensesTotal={134543325}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

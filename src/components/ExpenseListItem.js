import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem = ({id,description,amount,createdAt,note})=>(

    <div>

        <Link className="expense_link" to={`/${id}`}>
            <h3>{description}</h3>            
        </Link>
        <div className="card"> 
            
                <p><b> Details :</b>{numeral(amount).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}</p>
                <p><b>Summary :</b>{note}</p>
                  
        </div>
        
    </div>
)

export default ExpenseListItem;
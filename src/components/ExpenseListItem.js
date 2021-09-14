import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItem = ({id,description,amount,createdAt,note})=>(

    

        <Link className="list-item" to={`/${id}`}>

            <div className="list-item-contents">
                <div className="description_content"><b>{description}</b>
                    <br/>
                    <br/>
                                        
                    <div><b>Comments  :</b> {note}</div>       
                    <span><b> Created on:</b> {moment(createdAt).format('MMMM Do, YYYY')}</span>
                </div>            
                
                <div className="description_amount"><b>{numeral(amount).format('$0,0.00')}</b></div>
                
                
               
                
            </div>      
                     
        </Link>
       
        
    
)

export default ExpenseListItem;
import React from 'react'



export default class ExpenseForm extends React.Component{


    //Setup note change
    //setup onChange and value for the text area
  constructor(props){
    super(props);
    this.state={
        amount: props.expense?props.expense.amount:'',
        description : props.expense?props.expense.description:'',
        noteChange : props.expense?props.expense.note:'',
        createdAt : props.expense?props.expense.createdAt:'' ,
        calendarfocused: false,
        fieldError:''
       
    };
    this.onFormSubmit= this.onFormSubmit.bind(this);
  }
  


     onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }


    onnoteChange = (e)=>{
        const noteChange = e.target.value;
        this.setState(()=>({noteChange}))
    }

    onAmountChange=(e)=>{
        const amount = e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
           this.setState(()=>({amount}))
        }
       
       
    }

    onDateChange=(e)=>{
      const createDateval = e.target.value;    
      console.log("Recevied Date from Calendar",createDateval)   
     if(createDateval){
        this.setState(()=>({
            createdAt:createDateval
        }));
      }     
    }

    onFormSubmit(e){
        e.preventDefault();
       
        if(!this.state.description||!this.state.amount){           
                this.setState(()=>({
                    fieldError: 'Please Provide Description and Amount'
                })); 
        }else{
            this.setState(()=>({
                fieldError: ''
            }));
            
           this.props.onSubmit({
            description: this.state.description,
            amount : parseFloat(this.state.amount),
            createdAt : this.state.createdAt,
            note : this.state.noteChange


           });

           
        }
    }

    render(){

        return(
            <div>
                {this.state.fieldError&&<p>{this.state.fieldError}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />  
                     
                    <input type="text"
                    placeholder="Amount"
                    autoFocus   
                    value={this.state.amount}                             
                    onChange={this.onAmountChange}
                  
                    />  
                    <input type="date" id="createdDate" 
                    name="createdDate"
                    value={this.state.createdAt}
                    onChange={this.onDateChange}
                    />
                    
                      <textarea
                        placeholder="Add a note for your expense Options"
                        value={this.state.noteChange}      
                        onChange={this.onnoteChange}
                      />
                    <button>Save Expense</button>
                </form>
            </div>
        );


    }
    
}
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props)=>(
  
    <div>
       <h1>Info</h1>
       <p>The info: {props.info}</p>
    </div>
);


//Higher Order Component
const withAdminWarning =(WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin&&<p>This is Private Info. Please do not share! </p>}            
            <WrappedComponent {...props}/>
        </div>
    );
};


const requireAuthentication =(WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuthenticated ? (<p>Welcome</p>):(
                <p>Access Denied!! Please login to view the Component</p>
            )}            
            <WrappedComponent {...props}/>
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>,document.getElementById("app"));
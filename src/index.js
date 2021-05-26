//import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";


//creat a react component
const App = () =>{
    
    return(
     <div >
         <Message 
         header="Change in Service"
         paragraphText="Me just developer Not A Just Developer"
         />
     </div>
    );
};

const Message = (props) => {

    return(
          <div className="ui message">
        <div className="header">{props.header}</div>
            <p>{props.paragraphText}</p>
          </div>

    );

}

//creat a react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


import React from 'react'
import  ReactDOM  from 'react'
import App from './App'
/* import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
// This is a functional component 
const Welcome=()=>
{ 
        return <h1>Hello World!</h1> 
} 
  
ReactDOM.render( 
    <Welcome />, 
    document.getElementById("root") 
);
Let us see step-wise what is happening in the above example: 

1. We call the ReactDOM.render() as the first parameter.
2. React then calls the component Welcome, which returns <h1>Hello World!</h1>; as the result.
3.Then the ReactDOM efficiently updates the DOM to match with the returned element and renders that element to the DOM element with id as “root”.
*/
ReactDOM.render(<App/>, document.getElementById('root'));
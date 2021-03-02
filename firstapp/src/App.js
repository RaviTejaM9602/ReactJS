import React from 'react';

class App extends React.Component{
  render(){
    return(<div><h1>Registration Page</h1>
      
      Username : <input type="text" placeholder="Enter Username"></input><br></br><br></br>
      Password : <input type="pasword" placeholder="Enter Password"></input><br></br><br></br>
      <button>Submit</button></div>)
  }
}
export default App;

import React from 'react';
import NavBar from './NavBar';


const App = (props) => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default App;
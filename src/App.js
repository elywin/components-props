import React from 'react';
import logo from './logo.svg';
import Languages from './languages';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>List of Languages</h1>
        <div className="language">
         
          <Languages
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
           <Languages 
            name = 'JavaScript'
            image = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
            
          />
          {/* add props for React */}
          <Languages 
            name = 'React'
            image = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
          
        </div>
         
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {MyForm} from './components/MyForm'

const App = () => {
  return (
    <div className="App">
      <MyForm onSubmit={({title, url }) => {console.log(title, url)}}/>
    </div>
  );
}

export default App;

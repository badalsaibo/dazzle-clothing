import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      Hats Page
    </div>
  );
}

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;

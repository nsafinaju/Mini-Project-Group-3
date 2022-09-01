import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Home from './Components/HomeClass/Home';

function App() {
  return (
    <div id="App">
      <Home/>
      <Button/>
    </div>
  );
}



export default App;

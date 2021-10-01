import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <div className="app">
      <Header/>
      <Route path="/" exact component={HomeScreen}/>
    </div>
  );
}

export default App;

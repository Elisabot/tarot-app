import React from 'react';
import './App.css';
import { Card } from './components/card';
import CardGallery from './views/cardGallery';

function App(data) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Card />
    </div>
  );
}

export default App;

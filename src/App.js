import React from 'react';
import './App.css';
import { Card } from './components/card';

function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let&apos;s make a tarot thing</h1>
      </header>
      <Card />
    </div>
  );
}

export default App;

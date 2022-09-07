import React from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Radio Factoria!</h1>
      </header>
      <section className="search-bar">
        <input type="text"
              placeholder="Write station name" />
              <button name="search">Search</button>
      </section>
    </div>
  );
}

export default App;

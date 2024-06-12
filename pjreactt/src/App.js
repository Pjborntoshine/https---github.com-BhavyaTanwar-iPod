import React from 'react';
import './styles.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;

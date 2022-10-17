import React from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <About />
    </React.Fragment>
  );
}

export default App;

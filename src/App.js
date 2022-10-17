import React from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { MetricBox } from './components/MetricBox';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <About />
      <MetricBox />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import { MetricBox } from './components/MetricBox';
import { Services } from './components/Services';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <About />
      <MetricBox />
      <Services />
    </React.Fragment>
  );
}

export default App;

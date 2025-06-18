import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Images from './Components/Images/Images';
import Sensor1 from './Components/Sensor1/Sensor1';
import Sensor2 from './Components/Sensor2/Sensor2';
import Sensor3 from './Components/Sensor3/Sensor3';
import Sensor4 from './Components/Sensor4/Sensor4';
import Sensor6 from './Components/Sensor6/Sensor6';
// import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <div>
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/sensor1" element={<Sensor1 />} />
          <Route path="/sensor2" element={<Sensor2 />} />
          <Route path="/sensor3" element={<Sensor3 />} />
          <Route path="/sensor4" element={<Sensor4 />} />
          <Route path="/sensor6" element={<Sensor6 />} />
          {/* <Route path="/sensor1" element={<Sensor name="Sensor 1" />} />
          <Route path="/sensor2" element={<Sensor name="Sensor 2" />} />
          <Route path="/sensor3" element={<Sensor name="Sensor 3" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
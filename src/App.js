// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RiderForm from './RiderForm';
import SharerView from './SharerView';
import Navigation from './Navigation'; // Import the Navigation component

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Add the Navigation component here */}
        <Routes>
          <Route path="/rider" element={<RiderForm />} />
          <Route path="/sharer" element={<SharerView />} />
          <Route path="/" element={<RiderForm />} /> {/* Default to RiderForm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

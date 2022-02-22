import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HelloWorld from './HelloWorld';

const App = () => (
    <Router>
      <Routes>
        <Route exact path="/" element={"Home!"} />
        <Route path="/hello" element={<HelloWorld greeting="Friend" />} />
      </Routes>
    </Router>
);

export default App;
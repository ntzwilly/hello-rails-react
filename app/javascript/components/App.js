import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Greeting from "./Greeting";

const App = () => {
      <BrowserRouter>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/" element={<Link to="/greeting">Get random greeting</Link>} />
        </Routes>
     </BrowserRouter>
}

export default App

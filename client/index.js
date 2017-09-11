import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (
  <div>
    <Navbar />
    <Footer />
  </div>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
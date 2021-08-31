import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PagesetUp from './PagsetUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Switch>
       <PagesetUp />
       </Switch>

    </Router>
    </>
  );
}

export default App;

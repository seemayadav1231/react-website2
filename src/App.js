import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import products from './components/pages/products';
import services from './components/pages/services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/services" component={services}/>
          <Route path="/products" component={products}/>
 
 
          <Route path="/sign-up" component={SignUp}/>
 
      </Switch>
      </Router>
      </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
import Detail from './components/Detail'
// import Image from './components/Image'
import Grid from './components/Grid'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/" component={Grid} />
          
      </Switch> 
    </React.Fragment>
  );
}

export default App;

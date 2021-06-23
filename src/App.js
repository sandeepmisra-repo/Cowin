import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Pincode from './Pages/Pincode';
import District from './Pages/District';
import AllPincode from './Pages/AllPincode';
import { Component } from 'react';
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/pincode" component={Pincode} />
          <Route path="/district" component={District} />
          <Route path="/allpincode" component={AllPincode} />
          <Route path="*" component={Home} />
          
        </Switch> 
        
      </>
    );
  }

}

export default App;

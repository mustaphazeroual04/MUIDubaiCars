import React from 'react';
import AppMenu from './components/AppBar';
import SignIn from './components/auth/Login';
import SignUp from './components/auth/Signup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FindCar from './components/FindCar';

const App = () => {
    return (
        <Router>
            <AppMenu />
            <Switch>
                <Route path="/login">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/findCar">
                    <FindCar/>
                </Route>
          
            </Switch>
           
            
        </Router>
    )
}

export default App;

import React from 'react';
import AppMenu from './components/AppBar';
import SignIn from './components/auth/Login';
import SignUp from './components/auth/Signup';

const App = () => {
    return (
        <div>
            <AppMenu />
            <SignIn />
            <SignUp />
        </div>
    )
}

export default App;

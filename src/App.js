import React from 'react';
import './App.css';
import Header from './Components/Header/Header.tsx';
import Navbar from './Components/Navbar/Navbar.tsx';
import Profile from './Components/Profile/Profile.tsx';
import Dialogs from "./Components/Dialogs/Dialogs.tsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import { Container } from '@material-ui/core';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/NavBar.js'
import Home from './components/Home/home.js'
import Auth from './components/Auth/auth.js'

const App = () => {

    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Auth" element={<Auth/>}/>}

                </Routes>
            </Container>
        </BrowserRouter>

    );
}

export default App;
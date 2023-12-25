import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/profil';
import Chat from '../../pages/Chat';
import Main from '../../pages/Main';



const index = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/email" element={<Main/>} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};


export default index;

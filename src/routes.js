import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Details from './pages/Details'

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/details/:id' element={<Details />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
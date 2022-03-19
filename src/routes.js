import React from "react";
import {Routes, Route} from 'react-router-dom'
import {LandingScreen} from "./screens/LandingScreen";
import {BookingScreen} from "./screens/BookingScreen";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingScreen/>}/>
            <Route path="booking" element={<BookingScreen/>}/>
        </Routes>
    )
}

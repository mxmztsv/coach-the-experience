import React from "react";
import {Routes, Route} from 'react-router-dom'
import {LandingScreen} from "./screens/LandingScreen";
import {BookingScreen} from "./screens/BookingScreen";
import {ThxForSubmittingScreen} from "./screens/ThxForSubmittingScreen";
import {ErrorScreen} from "./screens/ErrorScreen";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingScreen/>}/>
            <Route path="booking" element={<BookingScreen/>}/>
            <Route path="thank-you" element={<ThxForSubmittingScreen/>}/>
            <Route path="error" element={<ErrorScreen/>}/>
        </Routes>
    )
}

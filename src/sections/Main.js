import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";
import * as SocialLinks from "../configs/SocialLinks";
import location from '../assets/svg/location 1.svg'
import {useNavigate} from "react-router-dom";

export const Main = () => {

    let navigate = useNavigate()

    return (
        <section className="main">
            <Container>
                <div className="main__wrapper">
                    <div className="main__subtitle-location__wrapper">
                        <img src={location} className="main__subtitle-location__img"/>
                        <p className="main__subtitle-location">LOCATION:</p>
                    </div>
                    <h1 className="main__title">Le Meridien</h1>
                    <h1 className="main__title">Phuket</h1>
                    <p className="main__subtitle">Discover Le Meridien Phuket Beach Resort</p>
                    <p className="main__date">May 9 - May 13</p>
                    <button className="book-btn" onClick={
                        async () => {
                            // window.location.href = SocialLinks.FORM
                            navigate('/booking')
                        }
                    }>Book Now</button>
                </div>
            </Container>
        </section>
    )
}

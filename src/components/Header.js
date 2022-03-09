import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";

import logo from '../assets/svg/coachk-the-experience.svg'

export const Header = () => {


    return (
        <header>
            <Container>
                <div className="header__wrapper">
                    <div className="header__logo__wrapper">
                        <img className="header__logo" src={logo}/>
                    </div>
                    <ul className="header__navbar">
                        <li><a href="#">Room Type</a></li>
                        <li><a href="#">What Is Happening ?</a></li>
                        <li><a href="#">Activities</a></li>
                        <li><a href="#">Sponsors</a></li>
                        <li><a href="#">Trip Itinerary</a></li>
                    </ul>
                    <div className="header__socials">
                        <div className="header__socials__item">inst</div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

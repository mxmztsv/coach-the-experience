import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";

import logo from '../assets/svg/coachk-the-experience.svg'
import inst from '../assets/svg/inst transparent.svg'
import fb from '../assets/svg/fb transparent.svg'
import tweeter from '../assets/svg/tweeter transparent.svg'
import burger from '../assets/svg/burger-btn.svg'
import {BurgerMenu} from "./BurgerMenu";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(true)

    const burgerButtonHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className="header">
                <Hidden mdDown>
                    <Container>
                        <div className="header__wrapper">
                            <div className="header__logo__wrapper">
                                <img className="header__logo" src={logo}/>
                            </div>
                            <ul className="header__navbar">
                                <li><a href="#packages">Room Type</a></li>
                                <li><a href="#what-is-happening">What Is Happening ?</a></li>
                                <li><a href="#activities">Activities</a></li>
                                <li><a href="#sponsors">Sponsors</a></li>
                                <li><a href="#trip-itinerary">Trip Itinerary</a></li>
                            </ul>
                            <div className="header__socials">
                                <a href="#" className="header__socials__link">
                                    <img src={inst} className="header__socials__img"/>
                                </a>
                                <a href="#" className="header__socials__link">
                                    <img src={fb} className="header__socials__img"/>
                                </a>
                                <a href="#" className="header__socials__link">
                                    <img src={tweeter} className="header__socials__img"/>
                                </a>
                            </div>
                        </div>
                    </Container>
                </Hidden>

                <Hidden mdUp>
                    <div className="header__logo__wrapper">
                        <img className="header__logo" src={logo}/>
                    </div>
                    <div className="burger-brn__wrapper">
                        <button onClick={burgerButtonHandler} className="burger-btn">
                            <img src={burger} className="burger-btn__img"/>
                        </button>
                    </div>
                </Hidden>
            </div>


            { isOpen && <BurgerMenu burgerButtonHandler={burgerButtonHandler}/>}

        </header>
    )
}

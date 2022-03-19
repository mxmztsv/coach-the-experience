import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";

import logo from '../assets/svg/coachk-the-experience.svg'
import inst from '../assets/svg/inst-transparent.svg'
import fb from '../assets/svg/fb transparent.svg'
import twitter from '../assets/svg/twitter-transparent.svg'
import youtube from '../assets/svg/youtube-transparent.svg'
import telegram from '../assets/svg/telegram-transparent.svg'
import burger from '../assets/svg/burger-btn.svg'
import {BurgerMenu} from "./BurgerMenu";
import * as SocialLinks from "../configs/SocialLinks";

export const Header = ({ bookingScreenMode = false }) => {

    const [isOpen, setIsOpen] = useState(false)

    const burgerButtonHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div className={bookingScreenMode ? "header header_bright" : "header"}>
                <Hidden mdDown>
                    <Container>
                        <div className="header__wrapper">
                            <div className="header__logo__wrapper">
                                <a href="/#">
                                    <img className="header__logo" src={logo}/>
                                </a>
                            </div>
                            <ul className="header__navbar">
                                <li><a href="/#packages">Room Type</a></li>
                                <li><a href="/#what-is-happening">What Is Happening ?</a></li>
                                <li><a href="/#activities">Activities</a></li>
                                <li><a href="/#sponsors">Sponsors</a></li>
                                <li><a href="/#trip-itinerary">Trip Itinerary</a></li>
                            </ul>
                            <div className="header__socials">
                                <a href={SocialLinks.INSTAGRAM} className="header__socials__link">
                                    <img src={inst} className="header__socials__img"/>
                                </a>
                                <a href={SocialLinks.TELEGRAM} className="header__socials__link">
                                    <img src={telegram} className="header__socials__img"/>
                                </a>
                                <a href={SocialLinks.TWITTER} className="header__socials__link">
                                    <img src={twitter} className="header__socials__img"/>
                                </a>
                                <a href={SocialLinks.YOUTUBE} className="header__socials__link">
                                    <img src={youtube} className="header__socials__img"/>
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

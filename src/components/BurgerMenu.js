import React from "react";

import logo from '../assets/svg/coachk-the-experience.svg'
import inst from '../assets/svg/inst transparent.svg'
import fb from '../assets/svg/fb transparent.svg'
import tweeter from '../assets/svg/tweeter transparent.svg'
import close from '../assets/svg/close-btn.svg'

export const BurgerMenu = ({ burgerButtonHandler }) => {

    return (
        <div className="burger-menu">
            <div className="burger-menu__header">
                <div className="header__logo__wrapper">
                    <img className="header__logo" src={logo}/>
                </div>
                <div className="burger-brn__wrapper">
                    <button onClick={burgerButtonHandler} className="burger-btn">
                        <img src={close} className="burger-btn__img"/>
                    </button>
                </div>
            </div>
            <ul className="burger-menu__list">
                <li><a href="#packages" onClick={burgerButtonHandler}>Room Type</a></li>
                <li><a href="#what-is-happening" onClick={burgerButtonHandler}>What Is Happening ?</a></li>
                <li><a href="#activities" onClick={burgerButtonHandler}>Activities</a></li>
                <li><a href="#sponsors" onClick={burgerButtonHandler}>Sponsors</a></li>
                <li><a href="#trip-itinerary" onClick={burgerButtonHandler}>Trip Itinerary</a></li>
            </ul>
        </div>
    )
}

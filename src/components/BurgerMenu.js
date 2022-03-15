import React from "react";

import logo from '../assets/svg/coachk-the-experience.svg'
import inst from '../assets/svg/inst-transparent.svg'
import fb from '../assets/svg/fb transparent.svg'
import twitter from '../assets/svg/twitter-transparent.svg'
import youtube from '../assets/svg/youtube-transparent.svg'
import telegram from '../assets/svg/telegram-transparent.svg'
import close from '../assets/svg/close-btn.svg'
import * as SocialLinks from "../configs/SocialLinks";

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
            <div className="burger-menu__content">
                <ul className="burger-menu__list">
                    <li><a href="#packages" onClick={burgerButtonHandler}>Room Type</a></li>
                    <li><a href="#what-is-happening" onClick={burgerButtonHandler}>What Is Happening ?</a></li>
                    <li><a href="#activities" onClick={burgerButtonHandler}>Activities</a></li>
                    <li><a href="#sponsors" onClick={burgerButtonHandler}>Sponsors</a></li>
                    <li><a href="#trip-itinerary" onClick={burgerButtonHandler}>Trip Itinerary</a></li>
                </ul>
                <div className="burger-menu__footer">
                    <div className="footer__social__row">
                        <a href={SocialLinks.INSTAGRAM} className="footer__social__link">
                            <img src={inst} className="burger-menu__footer__social__img"/>
                        </a>
                        {/*<a href="#" className="footer__social__link">*/}
                        {/*    <img src={fb} className="burger-menu__footer__social__img"/>*/}
                        {/*</a>*/}
                        <a href={SocialLinks.TWITTER} className="footer__social__link">
                            <img src={twitter} className="burger-menu__footer__social__img"/>
                        </a>
                        <a href={SocialLinks.TELEGRAM} className="footer__social__link">
                            <img src={telegram} className="burger-menu__footer__social__img"/>
                        </a>
                        <a href={SocialLinks.YOUTUBE} className="footer__social__link">
                            <img src={youtube} className="burger-menu__footer__social__img"/>
                        </a>
                        {/*<a href="#" className="footer__social__link">*/}
                        {/*    <img src={mail} className="burger-menu__footer__social__img"/>*/}
                        {/*</a>*/}
                    </div>
                    <p className="burger-menu__footer__text">
                        © 2022 Coach K Experience. All Rights Reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}

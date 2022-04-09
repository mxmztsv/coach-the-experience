import React from 'react'
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

import inst from '../assets/svg/inst.svg'
import fb from '../assets/svg/fb.svg'
import telegram from '../assets/svg/telegram.svg'
import mail from '../assets/svg/mail.svg'
import youtube from '../assets/svg/youtube.svg'
import twitter from '../assets/svg/tweeter.svg'
import * as SocialLinks from "../configs/SocialLinks";

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <div className="footer__row">
                    <a href="/#packages" className="footer__link">Room Type</a>
                    <a href="/#what-is-happening" className="footer__link">What Is Happening ?</a>
                    <a href="/#activities" className="footer__link">Activities</a>
                    <a href="/#sponsors" className="footer__link">Sponsors</a>
                    <a href="/#trip-itinerary" className="footer__link">Trip Itinerary</a>
                </div>
                <div className="footer__social__row">
                    <a href={SocialLinks.INSTAGRAM} className="footer__social__link">
                        <img src={inst} className="footer__social__img"/>
                    </a>
                    {/*<a href="#" className="footer__social__link">*/}
                    {/*    <img src={fb} className="footer__social__img"/>*/}
                    {/*</a>*/}
                    <a href={SocialLinks.TWITTER} className="footer__social__link">
                        <img src={twitter} className="footer__social__img"/>
                    </a>
                    <a href={SocialLinks.TELEGRAM} className="footer__social__link">
                        <img src={telegram} className="footer__social__img"/>
                    </a>
                    <a href={SocialLinks.YOUTUBE} className="footer__social__link">
                        <img src={youtube} className="footer__social__img"/>
                    </a>
                    {/*<a href="#" className="footer__social__link">*/}
                    {/*    <img src={mail} className="footer__social__img"/>*/}
                    {/*</a>*/}
                </div>
                <p className="footer__text">
                    © 2022 Coach K Experience. All Rights Reserved.
                </p>
            </Container>
        </footer>
    )
}

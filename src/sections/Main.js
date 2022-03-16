import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";
import * as SocialLinks from "../configs/SocialLinks";
import location from '../assets/svg/location 1.svg'

export const Main = () => {


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
                    <button className="book-btn" onClick={
                        async () => {
                            let link = 'https://script.google.com/macros/s/AKfycbw7DB7AQkVWxWszfGb6VW3gkaGLZXNyCSOsZA_ufZi9nH1zw5tVsck-tK6T-X-uBvLhrg/exec'
                            window.location.href = `${link}?p1=hello&p2=world&p3=!`
                            // window.location.href = SocialLinks.FORM
                            // const response = await fetch('https://script.google.com/macros/s/AKfycbyAfZb9wbd-Jt-aL2JuNqPQwoQwj1iL7Fw8hqzA4Ys2rKbtSutfO_yuS4qOoFAPmlY0Hg/exec?p1=hello&p2=csads&p3=ascvds')
                            // console.log(response)

                        }
                    }>Book Now</button>
                </div>
            </Container>
        </section>
    )
}

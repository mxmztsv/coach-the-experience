import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Hidden} from "@mui/material";

export const Main = () => {


    return (
        <section className="main">
            <Container>
                <div className="main__wrapper">
                    <div className="main__subtitle-location__wrapper">
                        <p className="main__subtitle-location">LOCATION:</p>
                    </div>
                    <h1 className="main__title">Le Meridien</h1>
                    <h1 className="main__title">Phuket</h1>
                    <p className="main__subtitle">Discover Le Meridien Phuket Beach Resort</p>
                    <button className="book-btn">Book Now</button>
                </div>
            </Container>
        </section>
    )
}

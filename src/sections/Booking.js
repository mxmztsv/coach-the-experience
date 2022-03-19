import React from 'react'
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import {Hidden} from "@mui/material";

import img from '../assets/img/image 28.png'
import * as SocialLinks from "../configs/SocialLinks";
import {useNavigate} from "react-router-dom";

export const Booking = () => {

    let navigate = useNavigate()

    return (
        <section className="booking">
            <Hidden mdDown>
                <Container>
                    <div className="booking__card">
                        <Grid container>
                            <Grid item md={5} xs={12}>
                                <div className="booking__card__btn__wrapper">
                                    <div className="book-btn__wrapper">
                                        <button onClick={() => {
                                            // window.location.href = SocialLinks.FORM
                                            navigate('/booking')
                                        }}
                                                className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={7} xs={12}>
                                <div className="booking__card__img__wrapper">
                                    <img src={img} className="booking__card__img"/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Hidden>
            <Hidden mdUp>
                <Container disableGutters>
                    <div className="booking__card">
                        <Grid container>
                            <Grid item md={5} xs={12}>
                                <div className="booking__card__btn__wrapper">
                                    <div className="book-btn__wrapper">
                                        <button onClick={() => {
                                                // window.location.href = SocialLinks.FORM
                                                navigate('/booking')
                                            }}
                                                className="book-btn">Book Now</button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={7} xs={12}>
                                <div className="booking__card__img__wrapper">
                                    <img src={img} className="booking__card__img"/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Hidden>

        </section>
    )
}

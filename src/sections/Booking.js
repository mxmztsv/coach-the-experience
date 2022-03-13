import React from 'react'
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

import img from '../assets/img/image 28.png'

export const Booking = () => {


    return (
        <section className="booking">
            <Container>
                <div className="booking__card">
                    <Grid container>
                        <Grid item sm={5} xs={12}>
                            <div className="booking__card__btn__wrapper">
                                <button className="book-btn">Book Now</button>
                            </div>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <div className="booking__card__img__wrapper">
                                <img src={img} className="booking__card__img"/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}

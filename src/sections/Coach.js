import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import coach from '../assets/img/coach.png'

export const Coach = () => {

    return (
        <section className="coach">
            <Container>
                <Grid container>
                    <Grid item sm={7} xs={12}>
                        <img src={coach} className="coach__img"/>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <div className="coach__info">
                            <p className="coach__info__title">WHO IS COACH K</p>
                            <h2 className="coach__info__name">
                                Joel Kovshoff
                            </h2>
                            <p className="coach__info__text">
                                Joel is an avid entrepreneur, trading and financial coach and industry leading advisor,
                                known for his go-to-market strategies, creative tokenomics, and a deep partnership
                                network. He is also the chief dealer for Alpha Stone Capital. He is found regularly on
                                YouTube and twitter providing content hosting several Thought Leaders to give easy to
                                digest information about their projects.
                                Coach is the Co-founder of Alpha Trading Algos LLC, and is an advisor to the following
                                projects, Ethernity, Splyt, FinXflo, Paid Network, Avarta, BlockBank, and more.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

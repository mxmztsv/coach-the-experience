import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const Activities = () => {


    return (
        <section className="activities">
            <div className="activities__header">
                <Container>
                <div className="activities__header__title__wrapper">
                    <h2 className="title">Activities</h2>
                    <div className="activities__header__subtitle__wrapper">
                        <p className="activities__header__subtitle">
                            The Coach K Experience is a once in a lifetime networking event, with some of the brightest
                            minds in the Cryptocurrency and Blockchain ecosystem.
                            We mix networking, experiences, and team building to create lasting relationships with:
                        </p>
                    </div>
                </div>
                </Container>
            </div>
        </section>
    )
}

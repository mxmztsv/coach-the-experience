import React from 'react'

import dots from '../assets/svg/scavenger-dots.svg'
import Container from "@mui/material/Container";

export const ScavengerHunt = () => {


    return (
        <section className="hunt">
            <Container>
                <h2 className="title">
                    Best Cryptocurrency Scavenger Hunt Ever!
                </h2>
                <div className="hunt__cards__row">
                    <div className="hunt__card_red">
                        <div className="hunt__card__row">
                            <p className="hunt__card__title">
                                50%
                            </p>
                            <div className="hunt__card__img__wrapper">
                                <img src={dots} className="hunt__card__img"/>
                            </div>
                        </div>
                        <p className="hunt__card__text">
                            go to social impact initiatives and charities
                        </p>
                    </div>
                    <div className="hunt__card_blue">
                        <div className="hunt__card__row">
                            <p className="hunt__card__title">
                                40%
                            </p>
                            <div className="hunt__card__img__wrapper">
                                <img src={dots} className="hunt__card__img"/>
                            </div>
                        </div>
                        <p className="hunt__card__text">
                            sponsor funds raised will go to the scavenger hunt
                        </p>
                    </div>
                    <div className="hunt__card_green">
                        <div className="hunt__card__row">
                            <p className="hunt__card__title">
                                10%
                            </p>
                            <div className="hunt__card__img__wrapper">
                                <img src={dots} className="hunt__card__img"/>
                            </div>
                        </div>
                        <p className="hunt__card__text">
                            co-marketing work and branding
                        </p>
                    </div>
                </div>
                <div className="hunt__text__wrapper">
                    <p className="hunt__text">
                        Not only is this an incredible networking event – we will be also gamifying the experience with
                        what we expect to be the largest Crypto Scavenger Hunt. It will be a ton of fun but that's not
                        the best part!
                    </p>
                </div>
            </Container>
        </section>
    )
}

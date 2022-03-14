import React, {useState} from 'react'

import perks from '../assets/svg/social-media 1.svg'
import Container from "@mui/material/Container";

export const SponsorPerks = () => {


    return (
        <section className="perks">
            <Container>
                <div className="perks__img__wrapper">
                    <img src={perks} className="perks__img"/>
                </div>
                <p className="perks__title">Other Sponsor perks</p>
                <div className="perks__row">
                    <p className="perks__row__item">Direct time with our guests/celebs</p>
                    <p className="perks__row__item">PR/Marketing</p>
                    <p className="perks__row__item">About the Social impact and scavenger hunt</p>
                </div>
            </Container>

        </section>
    )
}

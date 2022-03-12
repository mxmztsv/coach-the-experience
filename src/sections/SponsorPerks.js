import React, {useState} from 'react'

import perks from '../assets/svg/social-media 1.svg'

export const SponsorPerks = () => {


    return (
        <section className="perks">
            <img src={perks} className="perks__img"/>
            <p className="perks__title">Other Sponsor perks</p>
            <div className="perks__row">
                <p className="perks__row__item">Direct time with our guests/celebs</p>
                <p className="perks__row__item">PR/Marketing</p>
                <p className="perks__row__item">About the Social impact and scavenger hunt</p>
            </div>
        </section>
    )
}

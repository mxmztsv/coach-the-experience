import React from 'react'

import dots from '../assets/svg/scavenger-dots.svg'

export const InfoCard = () => {

    return (
        <section className="info-card">

            <div className="info-card__text__wrapper">
                <p className="info-card__title">
                    50% Of The Funds Raised From Sponsors
                    Will Go To Social Impact Initiatives
                </p>
            </div>
            <div className="info-card__text__wrapper">
                <p className="info-card__text">
                    We will be donating to local charities, orphanages, and communities that are in need. This scavenger
                    hunt will truly make this conference one to remember, while also having a huge positive impact on the
                    communities where we host our events.
                </p>
            </div>

        </section>
    )
}

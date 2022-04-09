import React from 'react'
import {Header} from "../components/Header";
import {Footer} from "../sections/Footer";
import Container from "@mui/material/Container";

export const ErrorScreen = () => {

    return (
        <div className="thx-for-submit__wrapper">
            <Header bookingScreenMode={true}/>
            {/*<Container>*/}
            <div className="thx-for-submit">

                <div className="thx-for-submit__card">
                    <h1 className="title">
                        Ooops...
                    </h1>
                    <p className="activities__header__subtitle">
                        Something went wrong!
                    </p>
                    <p className="activities__header__subtitle">
                        Please let us know about this situation and try again later.
                    </p>
                </div>


            </div>
            {/*</Container>*/}
            {/*<Footer/>*/}
        </div>

    )
}

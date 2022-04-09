import React from 'react'
import {Header} from "../components/Header";
import {Footer} from "../sections/Footer";
import Container from "@mui/material/Container";

export const ThxForSubmittingScreen = () => {

    return (
        <div className="thx-for-submit__wrapper">
            <Header bookingScreenMode={true}/>
            {/*<Container>*/}
            <div className="thx-for-submit">

                    <div className="thx-for-submit__card">
                        <h1 className="title">
                            Thank You!
                        </h1>
                        <p className="activities__header__subtitle">
                            The form was submitted successfully.
                        </p>
                    </div>


            </div>
            {/*</Container>*/}
            {/*<Footer/>*/}
        </div>

    )
}

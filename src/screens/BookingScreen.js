import {Header} from "../components/Header";
import {BookingBackground} from "../sections/BookingBackground";
import {BookingForm} from "../components/BookingForm";
import {Footer} from "../sections/Footer";


export const BookingScreen = () => {


    return (
        <div className="booking-screen">
            <Header bookingScreenMode={true}/>
            <BookingBackground>
                <BookingForm/>
            </BookingBackground>
            {/*<BookingForm/>*/}
            <div className="booking-screen__footer__radius"/>
                <Footer/>
            {/*</div>*/}
        </div>
    )
}

import Container from "@mui/material/Container";


export const BookingBackground = (props) => {

    return (
        <div className="booking-bg" id="form">
            {/*<Container>*/}
                {props.children}
            {/*</Container>*/}
        </div>
    )
}

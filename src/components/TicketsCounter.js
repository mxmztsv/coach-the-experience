

export const TicketsCounter = ({number}) => {


    return (
        <div className="tickets-counter">
            <p className="tickets-counter__text">
                <span className="tickets-counter__text__number">{number}</span>
                tickets for earlybirds left
            </p>
        </div>
    )
}

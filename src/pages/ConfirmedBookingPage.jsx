import BookingData from "../components/BookingData"
import { useSelector } from "react-redux"

const ConfirmedBookingPage = () => {
    const booking = useSelector((state) => state.booking.bookingInfo)

    return (
        <>
            <BookingData booking={booking} />
        </>
    )
}

export default ConfirmedBookingPage
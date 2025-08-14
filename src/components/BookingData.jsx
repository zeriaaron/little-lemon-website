import bookingDataStyle from '../styles/BookingData.module.css'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

const BookingData = ({booking}) => {
    const navigate = useNavigate()
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className={classNames(bookingDataStyle.div)}>
                <h1>Reservation has successfully submitted!</h1>
                <table className={classNames(bookingDataStyle.table)}>
                    <tr>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Number of Guests</td>
                        <td>Occasion</td>
                    </tr>
                    {booking.map(
                        (val, idx) => (
                            <tr key={idx}>
                                <td>{val.date}</td>
                                <td>{val.time}</td>
                                <td>{val.guests}</td>
                                <td>{capitalize(val.occasion)}</td>
                            </tr>
                        )
                    )}
                </table>

                <button type="button" onClick={handleHomeClick} className={classNames(bookingDataStyle.button)}>Go to Home</button>
            </div>
        </>
    )
}

export default BookingData
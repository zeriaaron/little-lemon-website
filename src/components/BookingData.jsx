import bookingDataStyle from '../styles/BookingData.module.css'
import classNames from 'classnames'

const BookingData = ({data}) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
    
    return (
        <>
            <table className={classNames(bookingDataStyle.table)}>
                <tr>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Number of Guests</td>
                    <td>Occasion</td>
                </tr>
                {data.map(
                    (obj, idx) => (
                        <tr key={idx}>
                            <td>{obj.date}</td>
                            <td>{obj.time}</td>
                            <td>{obj.guests}</td>
                            <td>{capitalize(obj.occasion)}</td>
                        </tr>
                    )
                )}
            </table>
        </>
    )
}

export default BookingData
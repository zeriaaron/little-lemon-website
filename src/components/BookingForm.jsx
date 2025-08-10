import bookStyle from '../styles/Book.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ])
    const [date, setDate] = useState('')
    const [time, setTime] = useState(availableTimes[0] || "")
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('Birthday')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        console.log(date)
        console.log(time)
        console.log(guests)
        console.log(occasion)

        setDate('')
        setAvailableTimes([])
        setGuests('1')
        setOccasion('Birthday')
        navigate('/')
    }

    const verify = (date && time && guests && occasion) ? true : false;

    return (
        <>
            <main>
                <form onSubmit={submitHandler} className={bookStyle.form}>
                    <fieldset className={classNames(bookStyle.fieldset)}>
                        <h1>Reserve a Table</h1>
                        <label htmlFor="date">Choose date</label>
                        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
                        <label htmlFor="time">Choose time</label>
                        <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
                            {
                                availableTimes.map(
                                    time => (
                                        <option key={time} value={time}>{time}</option>
                                    )
                                )
                            }
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
                        <label htmlFor="occasion">Choose occasion</label>
                        <select name="occasion" id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        <button disabled={!verify} type="submit">Submit</button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default BookingForm


import bookingPageStyle from '../styles/BookingForm.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { isObjEqual } from '../functions/equalComparator'

const BookingForm = ({ state, dispatch, submitForm }) => {
    // const today = new Date().toISOString().split('T')[0]
    const [date, setDate] = useState('')
    const [time, setTime] = useState(state.availableTimes[0] || '')
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('birthday')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        const payload = {date, time, guests, occasion}

        const isDuplicate = state.bookingInfo.some(obj => isObjEqual(obj, payload))

        if (isDuplicate) {
            alert('Reservation already existing!')
            return
        }

        const response = submitForm(payload)

        if (response) {
            dispatch({type: 'submit', payload})
            navigate('/confirmation')

            setDate('')
            setTime(state.availableTimes[0])
            setGuests('1')
            setOccasion('birthday')
        }

        // create if statements for validation before requesting
        // you can do fetch POST
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value
        setDate(selectedDate)
        dispatch({ type: 'update', payload: { date: selectedDate }})
    }

    const valid = (date && time && guests && occasion) ? true : false;

    return (
        <>
            <main>
                <form onSubmit={submitHandler} className={bookingPageStyle.form}>
                    <fieldset className={classNames(bookingPageStyle.fieldset)}>
                        <h1>Reserve a Table</h1>
                        <label htmlFor="date">Choose date</label>
                        <input type="date" id="date" value={date} onChange={handleDateChange} />
                        <label htmlFor="time">Choose time</label>
                        <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
                            {
                                state.availableTimes.map(
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
                        <button disabled={!valid} type="submit">Submit</button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default BookingForm


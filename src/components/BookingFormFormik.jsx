import bookingFormStyle from '../styles/BookingForm.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { isObjEqual } from '../functions/equalComparator'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const BookingFormFormik = ({ state, dispatch, submitForm }) => {
    const today = new Date().toISOString().split('T')[0]
    const [date, setDate] = useState('')
    const [time, setTime] = useState(state.availableTimes[0])
    const [guests, setGuests] = useState('1')
    const [occasion, setOccasion] = useState('birthday')
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        date: Yup.date().min(today, 'Date must be today or later').required('Date is required'),
        time: Yup.string().required('Time is required'),
        guests: Yup.number().min(1, "At least 1 guest").max(10, "Max 10 guests").required('Number of guests is required'),
        occasion: Yup.string().required('Occasion is required')
    })

    const handleSubmit = (values, { resetForm }) => {
        const payload = { ...values }

        const isDuplicate = state.bookingInfo.some(obj => isObjEqual(obj, payload))

        if (isDuplicate) {
            alert('Reservation already existing!')
            return
        }

        const response = submitForm(payload)

        if (response) {
            dispatch({ type: 'submit', payload })
            navigate('/confirmation')

            resetForm()
            setDate('')
            setTime(state.availableTimes[0])
            setGuests('1')
            setOccasion('birthday')
        }

        // create if statements for validation before requesting
        // you can do fetch POST
    }

    return (
        <>
            <main>
                <Formik
                initialValues={{
                    date,
                    time,
                    guests,
                    occasion
                }}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form className={bookingFormStyle.form}>
                            <fieldset className={classNames(bookingFormStyle.fieldset)}>
                                <h1>Reserve a Table</h1>
                                <label htmlFor="date">Choose date</label>
                                <Field type='date' name='date' id='date'
                                onChange={
                                    e => {
                                        const selectedDate = e.target.value
                                        setDate(selectedDate)
                                        setFieldValue('date', selectedDate)
                                        dispatch({ type: 'update', payload: { date: selectedDate } })
                                    }
                                } />
                                <ErrorMessage name='date' component='div' className={classNames('error', bookingFormStyle.error)} />

                                <label htmlFor="time">Choose time</label>
                                <Field as='select' type='time' name='time' id='time' onChange={
                                    e => {
                                        const selectedTime = e.target.value
                                        setTime(selectedTime)
                                        setFieldValue('time', selectedTime)
                                    }
                                } >
                                    { state.availableTimes.map(
                                        (time) => (
                                            <option key={time} value={time}>{time}</option>
                                        )
                                    )}
                                </Field>
                                <ErrorMessage name='time' component='div' className={classNames('error', bookingFormStyle.error)} />

                                <label htmlFor="guests">Number of guests</label>
                                <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests}
                                onChange={
                                    e => {
                                        const selectedGuests = e.target.value
                                        setGuests(selectedGuests)
                                        setFieldValue('guests', selectedGuests)
                                    }
                                } />
                                <ErrorMessage name='guests' component='div' className={classNames('error', bookingFormStyle.error)} />

                                <label htmlFor="occasion">Choose occasion</label>
                                <select name="occasion" id="occasion" value={occasion}
                                onChange={
                                    e => {
                                        const selectedOccasion = e.target.value
                                        setOccasion(selectedOccasion)
                                        setFieldValue('occasion', selectedOccasion)
                                    }
                                } >
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                </select>
                                <ErrorMessage name='occasion' component='div' className={classNames('error', bookingFormStyle.error)} />

                                <button type="submit">Submit</button>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
            </main>
        </>
    )
}

export default BookingFormFormik


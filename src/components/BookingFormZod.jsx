import bookingFormStyle from '../styles/BookingForm.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { isObjEqual } from '../functions/equalComparator'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { addBooking } from '../store/store'

const BookingFormZod = ({ state, dispatch, submitForm }) => {
    const today = new Date().toISOString().split('T')[0]
    const dispatchRedux = useDispatch()
    const navigate = useNavigate()

    const schema = z.object({
        date: z.string()
        .nonempty('Date is required')
        .transform(val => new Date(val))
        .refine(val => val >= new Date(today), 'Date must be today or later'),
        time: z.string().nonempty('Time is required'),
        guests: z.string()
        .nonempty('Number of guests is required')
        .transform(val => Number(val))
        .refine(val => val >= 1, 'At least 1 guest')
        .refine(val => val <= 10, 'Max 10 guests'),
        occasion: z.string().nonempty('Occasion is required')
    })

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        resolver: zodResolver(schema)
    })

    const date = watch('date')
    const time = watch('time')
    const guests = watch('guests')
    const occasion = watch('occasion')

    useEffect(() => {
        if (date) dispatch({ type: 'update', payload: { date: date }})
    }, [date, dispatch])

    const submitHandler = () => {
        const payload = {date, time, guests, occasion}

        const isDuplicate = state.bookingInfo.some(obj => isObjEqual(obj, payload))

        if (isDuplicate) {
            alert('Reservation already existing!')
            return
        }

        const response = submitForm(payload)

        if (response) {
            dispatch({type: 'submit', payload})
            dispatchRedux(addBooking(payload))
            reset()
            navigate('/confirmation')
        }

        // create if statements for validation before requesting
        // you can do fetch POST
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit(submitHandler)} className={bookingFormStyle.form}>
                    <fieldset className={classNames(bookingFormStyle.fieldset)}>
                        <h1>Reserve a Table</h1>
                        <label htmlFor="date">Choose date</label>
                        <input type="date" id="date" {...register('date')} />
                        { errors.date && <p data-testid='date-error' className={classNames(bookingFormStyle.error)}>{errors.date.message}</p> }

                        <label htmlFor="time">Choose time</label>
                        <select name="time" id="time" {...register('time')}>
                            {
                                state.availableTimes.map(
                                    time => (
                                        <option key={time} value={time}>{time}</option>
                                    )
                                )
                            }
                        </select>
                        { errors.time && <p data-testid='time-error' className={classNames(bookingFormStyle.error)}>{errors.time.message}</p> }

                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" id="guests" placeholder="1" {...register('guests')}/>
                        { errors.guests && <p data-testid='guests-error' className={classNames(bookingFormStyle.error)}>{errors.guests.message}</p> }

                        <label htmlFor="occasion">Choose occasion</label>
                        <select name="occasion" id="occasion" {...register('occasion')}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        { errors.occasion && <p data-testid='occasion-error' className={classNames(bookingFormStyle.error)}>{errors.occasion.message}</p> }

                        <button type="submit" aria-label='Submit Form'>Submit</button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default BookingFormZod


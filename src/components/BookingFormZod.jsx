import bookingFormStyle from '../styles/BookingForm.module.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { isObjEqual } from './equalComparator'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const BookingFormZod = ({ state, dispatch, submitForm }) => {
    const today = new Date().toISOString().split('T')[0]
    const navigate = useNavigate()

    const schema = z.object({
        date: z.string().transform(val => new Date(val)).refine(val => val >= new Date(today), 'Date must be today or later'),
        time: z.string(),
        guests: z.string()
        .transform(val => Number(val))
        .refine(val => val >= 1, 'At least 1 guest')
        .refine(val => val <= 10, 'Max 10 guests'),
        occasion: z.string()
    })

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        mode: 'onChange',
        defaultValues: {
            date: '',
            time: state.availableTimes[0],
            guests: '1',
            occasion: 'birthday'
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
            reset()
            navigate('/confirmation')
        }

        // create if statements for validation before requesting
        // you can do fetch POST
    };

    return (
        <>
            <main>
                <form onSubmit={handleSubmit(submitHandler)} className={bookingFormStyle.form}>
                    <fieldset className={classNames(bookingFormStyle.fieldset)}>
                        <h1>Reserve a Table</h1>
                        <label htmlFor="date">Choose date</label>
                        <input type="date" id="date" {...register('date')} />
                        { errors.date && <p className={classNames(bookingFormStyle.error)}>{errors.date.message}</p> }

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
                        { errors.time && <p className={classNames(bookingFormStyle.error)}>{errors.time.message}</p> }

                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" id="guests" placeholder="1" {...register('guests')}/>
                        { errors.guests && <p className={classNames(bookingFormStyle.error)}>{errors.guests.message}</p> }

                        <label htmlFor="occasion">Choose occasion</label>
                        <select name="occasion" id="occasion" {...register('occasion')}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        { errors.occasion && <p className={classNames(bookingFormStyle.error)}>{errors.occasion.message}</p> }

                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default BookingFormZod


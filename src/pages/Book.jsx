import { useReducer } from 'react'
import classNames from 'classnames'
import BookingForm from '../components/BookingForm'
import BookingFormFormik from '../components/BookingFormFormik'
import BookingFormZod from '../components/BookingFormZod'
import BookingData from '../components/BookingData'
import { updateTimes, initializeTimes } from '../components/timesReducer'
import bookStyle from '../styles/Book.module.css'
import { submitAPI } from '../../api'

const Book = () => {
    const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes)

    const submitForm = (formData) => {
        return submitAPI(formData)
    }

    return (
        <>
            <div className={classNames(bookStyle.div)}>
                {/* <BookingForm state={state} dispatch={dispatch} submitForm={submitForm}  /> */}
                {/* <BookingFormFormik state={state} dispatch={dispatch} submitForm={submitForm}  /> */}
                <BookingFormZod state={state} dispatch={dispatch} submitForm={submitForm}  />
                {/* <BookingData data={state.bookingInfo} /> */}
            </div>
        </>
    )
}

export default Book
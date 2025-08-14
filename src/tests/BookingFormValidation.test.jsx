import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { test, expect, vi, describe } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import BookingForm from '../components/BookingFormZod'
import { Provider } from 'react-redux'
import { store } from '../store/store'

// get the inputs using labels
const dispatchMock = vi.fn()
const submitMock = vi.fn(() => true)

const renderBookingForm = () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <BookingForm state={{availableTimes: ['17:00', '18:00', '18:30'], bookingInfo: []}} dispatch={dispatchMock} submitForm={submitMock} />
            </Provider>
        </MemoryRouter>
    )
}

test('value fidelity of payload', async () => {
    renderBookingForm()

    const dateInput = screen.getByLabelText(/choose date/i)
    const timeInput = screen.getByLabelText(/choose time/i)
    const guestsInput = screen.getByLabelText(/number of guests/i)
    const occasionInput = screen.getByLabelText(/choose occasion/i)
    const submitBtn = screen.getByRole('button')

    fireEvent.change(dateInput, { target: { value: '2025-09-25' } })
    fireEvent.change(timeInput, { target: { value: '18:00' }})
    fireEvent.change(guestsInput, { target: { value: '2' }})
    fireEvent.change(occasionInput, { target: { value: 'birthday' }})

    fireEvent.click(submitBtn)

    await waitFor(() => {
        expect(submitMock).toHaveBeenCalledWith({
            date: '2025-09-25',
            time: '18:00',
            guests: '2',
            occasion: 'birthday',
        })
    })
})

test('html validation for each form field [Valid]', async () => {
    renderBookingForm()

    const dateInput = screen.getByLabelText(/choose date/i)
    const timeInput = screen.getByLabelText(/choose time/i)
    const guestsInput = screen.getByLabelText(/number of guests/i)
    const occasionInput = screen.getByLabelText(/choose occasion/i)
    const submitBtn = screen.getByRole('button')

    fireEvent.change(dateInput, { target: { value: '2025-09-25' } })
    fireEvent.change(timeInput, { target: { value: '18:00' }})
    fireEvent.change(guestsInput, { target: { value: '2' }})
    fireEvent.change(occasionInput, { target: { value: 'birthday' }})

    fireEvent.click(submitBtn)

    const dateError = screen.queryByTestId('date-error')
    const timeError = screen.queryByTestId('time-error')
    const guestsError= screen.queryByTestId('guests-error')
    const occasionError = screen.queryByTestId('occasion-error')

    await waitFor(() => {
        expect(submitMock).toHaveBeenCalledWith({
            date: '2025-09-25',
            time: '18:00',
            guests: '2',
            occasion: 'birthday',
        })

        expect(dateError).toBeNull()
        expect(timeError).toBeNull()
        expect(guestsError).toBeNull()
        expect(occasionError).toBeNull()
    })
})

test('html validation for each form field [Invalid]', async () => {
    renderBookingForm()

    const payload = {
        date: '2024-09-25',
        time: '18:00',
        guests: '0',
        occasion: 'birthday',
    }

    const dateInput = screen.getByLabelText(/choose date/i)
    const timeInput = screen.getByLabelText(/choose time/i)
    const guestsInput = screen.getByLabelText(/number of guests/i)
    const occasionInput = screen.getByLabelText(/choose occasion/i)
    const submitBtn = screen.getByRole('button')

    fireEvent.change(dateInput, { target: { value: payload.date } })
    fireEvent.change(timeInput, { target: { value: payload.time }})
    fireEvent.change(guestsInput, { target: { value: payload.guests }})
    fireEvent.change(occasionInput, { target: { value: payload.occasion }})

    fireEvent.click(submitBtn)

    const dateError = await screen.findByTestId('date-error')
    const timeError = screen.queryByTestId('time-error')
    const guestsError= await screen.findByTestId('guests-error')
    const occasionError = screen.queryByTestId('occasion-error')

    await waitFor(() => {
        expect(submitMock).not.toHaveBeenCalledWith(payload)

        expect(dateError).toHaveTextContent('Date must be today or later')
        expect(timeError).toBeNull()
        expect(guestsError).toHaveTextContent('At least 1 guest')
        expect(occasionError).toBeNull()
    })
})

// Required test
describe('Date input validation [All Invalid]', () => {
    test('required', async () => {
        renderBookingForm()

        const dateInput = screen.getByLabelText(/choose date/i)
        const submitBtn = screen.getByRole('button')

        fireEvent.change(dateInput, { target: { value: '' }})

        fireEvent.click(submitBtn)

        const dateError = await screen.findByTestId('date-error')

        expect(dateError).toHaveTextContent('Date is required')
    })

    test('minimum', async () => {
        renderBookingForm()

        const dateInput = screen.getByLabelText(/choose date/i)

        fireEvent.change(dateInput, { target: { value: '2000-08-24' }})

        const dateError = await screen.findByTestId('date-error')

        expect(dateError).toHaveTextContent('Date must be today or later')
    })
})

describe('Time validation [All Invalid]', () => {
    test('required', async () => {
        renderBookingForm()

        const timeInput = screen.getByLabelText(/choose time/i)
        const submitBtn = screen.getByRole('button')

        fireEvent.change(timeInput, { target: { value: '' }})
        fireEvent.click(submitBtn)

        const timeError = await screen.findByTestId('time-error')

        expect(timeError).toHaveTextContent('Time is required')
    })
})

describe('Guests validation [All Invalid]', () => {
    test('required', async () => {
        renderBookingForm()

        const guestsInput = screen.getByLabelText(/number of guests/i)
        const submitBtn = screen.getByRole('button')

        fireEvent.change(guestsInput, { target: { value: '' }})
        fireEvent.click(submitBtn)

        const guestsError = await screen.findByTestId('guests-error')

        expect(guestsError).toHaveTextContent('Number of guests is required')
    })

    test('minimum', async () => {
        renderBookingForm()

        const guestsInput = screen.getByLabelText(/number of guests/i)

        fireEvent.change(guestsInput, { target: { value: '0' }})

        const guestsError = await screen.findByTestId('guests-error')

        expect(guestsError).toHaveTextContent('At least 1 guest')
    })

    test('maximum', async () => {
        renderBookingForm()

        const guestsInput = screen.getByLabelText(/number of guests/i)

        fireEvent.change(guestsInput, { target: { value: '11' }})

        const guestsError = await screen.findByTestId('guests-error')

        expect(guestsError).toHaveTextContent('Max 10 guests')
    })
})

describe('Occasion validation [ALl Invalid]', () => {
    test('required', async () => {
        renderBookingForm()

        const occasionInput = screen.getByLabelText(/choose occasion/i)
        const submitBtn = screen.getByRole('button')

        fireEvent.change(occasionInput, { target: { value: '' }})
        fireEvent.click(submitBtn)

        const occasionError = await screen.findByTestId('occasion-error')

        expect(occasionError).toHaveTextContent('Occasion is required')
    })
})

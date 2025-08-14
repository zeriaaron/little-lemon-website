import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingFormZod'
import { MemoryRouter } from "react-router-dom";
import { test, expect, vi } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const dispatchMock = vi.fn()
const submitFormMock = vi.fn()

test('Renders the BookingForm heading', {}, () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <BookingForm state={{ availableTimes: [], bookingInfo: [], submitted: false }}
                dispatch={dispatchMock}
                submitForm={submitFormMock}/>
            </Provider>
        </MemoryRouter>
    )

    const headerText = screen.getByText('Reserve a Table')

    expect(headerText).toBeInTheDocument()
})

// test('dispatch is called when date changes', () => {
//     render(
//         <MemoryRouter>
//             <BookingForm state={{ availableTimes: [], bookingInfo: [], submitted: false }}
//             dispatch={dispatchMock}
//             submitForm={submitFormMock} />
//         </MemoryRouter>
//     )

//     const dateInput = screen.getByLabelText(/choose date/i)
//     fireEvent.change(dateInput, { target: { value: '2025-08-11'} })

//     expect(dispatchMock).toHaveBeenCalledWith({ type: 'update', payload: { date: '2025-08-11' } })
// })